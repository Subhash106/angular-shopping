import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
