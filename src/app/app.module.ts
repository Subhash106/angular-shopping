import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import HeaderComponent from './header/header.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { NumbersComponent } from './numbers/numbers.component';
import { AppRoutingModule } from './app-routing.module';
import { DataStorageService } from './recipes/data-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    NumbersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DataStorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
