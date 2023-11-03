import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Aaloo do pyaja',
      'One of the Indian delicious recipe',
      '../../assets/aloo-do-pyaza-inside_2.jpg'
    ),
    new Recipe(
      'Tomato Rasam',
      'tomato-rasam south indian recipe',
      '../../assets/tomato-rasam.jpg'
    ),
    new Recipe(
      'Butter chicken',
      'Butter-chicken.webp',
      '../../assets/Butter-chicken.webp'
    ),
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
