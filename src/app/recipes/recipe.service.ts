import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Aaloo do pyaja',
      'One of the Indian delicious recipe',
      '../../assets/aloo-do-pyaza-inside_2.jpg',
      [new Ingredient('Bread', 1), new Ingredient('Potatos', 4)]
    ),
    new Recipe(
      2,
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
      3,
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

  getRecipes(): Recipe[] {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    return this.recipes.slice().find((recipe: Recipe) => recipe.id === id);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    this.recipes[this.recipes.findIndex((recipe) => recipe.id === id)] =
      newRecipe;
  }

  getNextId(): number {
    return this.recipes.length + 1;
  }
}
