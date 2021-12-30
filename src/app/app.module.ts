import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IssusedBookComponent } from './issused-book/issused-book.component';
import { BooksComponent } from './books/books.component';
import { UsersComponent } from './users/users.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';
import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IssusedBookComponent,
    BooksComponent,
    UsersComponent,
    BooksEditComponent,
    UsersEditComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
