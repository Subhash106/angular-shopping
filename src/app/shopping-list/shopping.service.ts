import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  startedEditing: Subject<number> = new Subject<number>();

  getIngredients() {
    return this.ingredients;
  }

  getIngredient(id: number) {
    return this.ingredients[id];
  }

  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  editIngredients(id: number, ingredient: Ingredient) {
    this.ingredients[id] = ingredient;
  }
}
