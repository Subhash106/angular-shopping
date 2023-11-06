import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
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

  selectRecipe = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes;
  }
}
