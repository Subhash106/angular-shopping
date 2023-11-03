import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showRecipe: boolean = true;

  onMenuItemClick(menuItem: string) {
    if (menuItem === 'recipe') {
      this.showRecipe = true;
    } else {
      this.showRecipe = false;
    }
  }
}
