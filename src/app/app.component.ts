import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  //how component should be identified or referenced
  //selector helps in that
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // this is data binding
  //basically we are binding our data in html file
  title = 'practise-app';
}

// Bootstrapping is the process of initializing or loading angular application
