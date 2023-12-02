import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient) {}

  storeRecipe(recipeData: Recipe[]) {
    this.http
      .post(
        'https://food-order-app-e5c31-default-rtdb.firebaseio.com/recipes.json',
        recipeData
      )
      .subscribe((data) => {
        console.log('data', data);
      });
  }

  fetchRecipe() {
    return this.http.get(
      'https://food-order-app-e5c31-default-rtdb.firebaseio.com/recipes.json'
    );
  }
}
