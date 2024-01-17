import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

//
// data binding allows us to communicate between component class with its view template
//and vice versa
export class AppComponent {
  // see in template
  // for data defined here to be used in html
  // we use
  // {{}}, this is string interpolation
  // (), this is event binding
  // [] this is property binding
  //for this see in template file
  title = 'practise-app';
  message = 'online-learning';
  display = false;

  onClick() {
    this.display = !this.display;
  }
}
