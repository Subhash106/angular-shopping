import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  @Output() menuItemSelected = new EventEmitter<string>();

  menuClickHandler(e: MouseEvent, menuItem: string) {
    e.preventDefault();

    this.menuItemSelected.emit(menuItem);
  }
}
