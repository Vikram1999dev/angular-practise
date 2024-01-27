import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
//
//The *ngClass directive which is an attribute directive in Angular allows you to dynamically set CSS classes on an HTML element by databinding
//  an expression that represents all classes to be added. The expression can be a string, an object, or an array.
//
//false,'',null,undefined,0 are falsy value
//other than this is a falsy value
export class AppComponent {
  title = 'practise-app';
  message = 'online-learning';
  display = false;

  onClick() {
    this.display = !this.display;
  }
}
