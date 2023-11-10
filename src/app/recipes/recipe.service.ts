import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Aaloo do pyaja',
      'One of the Indian delicious recipe',
      '../../assets/aloo-do-pyaza-inside_2.jpg',
      [new Ingredient('Bread', 1), new Ingredient('Potatos', 4)]
    ),
    new Recipe(
      'Tomato Rasam',
      'tomato-rasam south indian recipe',
      '../../assets/tomato-rasam.jpg',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Potatos', 4),
        new Ingredient('Apples', 4),
      ]
    ),
    new Recipe(
      'Butter chicken',
      'Butter-chicken.webp',
      '../../assets/Butter-chicken.webp',
      [
        new Ingredient('Bread', 1),
        new Ingredient('Potatos', 4),
        new Ingredient('Onions', 3),
      ]
    ),
  ];

  selectRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes;
  }
}
