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

// in product list component
// used string interpolation
//and also called function from template file
export class AppComponent {
  title = 'practise-app';
  message = 'online-learning';
  display = false;

  onClick() {
    this.display = !this.display;
  }
}
