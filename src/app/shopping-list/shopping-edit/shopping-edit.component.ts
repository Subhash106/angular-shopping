import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('shoppingForm') shoppingForm: NgForm;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}

  onSubmit(shoppingForm: NgForm) {
    this.shoppingService.addIngredients(
      new Ingredient(
        shoppingForm.controls.name.value,
        shoppingForm.controls.amount.value
      )
    );
  }
}
