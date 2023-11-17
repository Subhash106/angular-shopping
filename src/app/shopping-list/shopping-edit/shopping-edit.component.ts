import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  id: number;
  editMode: boolean = false;
  editSubscription: Subscription;
  @ViewChild('shoppingForm') shoppingForm: NgForm;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.editSubscription = this.shoppingService.startedEditing.subscribe(
      (id: number) => {
        this.id = id;
        this.editMode = true;
        this.shoppingForm.setValue({
          ...this.shoppingService.getIngredient(id),
        });
      }
    );
  }

  onSubmit(shoppingForm: NgForm) {
    if (this.editMode) {
      this.shoppingService.editIngredients(
        this.id,
        new Ingredient(
          shoppingForm.controls.name.value,
          shoppingForm.controls.amount.value
        )
      );
      this.editMode = false;
    } else {
      this.shoppingService.addIngredients(
        new Ingredient(
          shoppingForm.controls.name.value,
          shoppingForm.controls.amount.value
        )
      );
    }

    this.shoppingForm.reset();
  }

  ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
}
