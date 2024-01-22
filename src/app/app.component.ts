import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

//
// a directive is an instructions to the DOM
//it
//manipulate DOM
//change behavior
//Add/Remove DOM elements

//there are three types of directive that is

//component directive
//this directive is the angular component.it is a directive with a template
//components are also a directive

//attribute directive
//this directive is used to change the appearance or behavior of a DOM element
//e.g. ngClass and ngStyle

//structural directive
//this directive is used to add or remove a DOM element on the Webpage
//e.g. ngIf,ngFor,ngSwitch
export class AppComponent {
  title = 'practise-app';
  message = 'online-learning';
  display = false;

  onClick() {
    this.display = !this.display;
  }
}
