import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../recipes/data-storage.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  saveRecipe() {
    const recipes = this.recipeService.getRecipes();
    this.dataStorageService.storeRecipe(recipes);
  }

  fetchRecipe() {
    this.dataStorageService.fetchRecipe().subscribe((recipeData) => {
      this.recipeService.setRecipes(Object.values(recipeData));
    });
  }
}
