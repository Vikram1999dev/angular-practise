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
//Property binding lets us bind a property of a DOM object
//for example the hidden property to some data value.
//This can let us show or hide a DOM element, or manipulate
//the DOM in some other way
//when we want to display some data in HTML we use string interpolation
//BUT
// when we want to assign some dynamic value to an -->HTML attribute
//there we use property binding
//in the "" we can write any typescript expression
//
//
//CHECK OUT THE LIST OF IMPORTANT PROPERTY BINDING IN product-list.component.ts file
//
//
export class AppComponent {
  title = 'practise-app';
  message = 'online-learning';
  display = false;

  onClick() {
    this.display = !this.display;
  }
}
