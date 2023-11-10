import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName') ingredientName: ElementRef;
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {}

  addIngredientHandler() {
    this.shoppingService.addIngredients(
      new Ingredient(
        this.ingredientName.nativeElement.value,
        this.ingredientAmount.nativeElement.value
      )
    );
  }
}
