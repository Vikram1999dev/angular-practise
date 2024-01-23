import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ForLoopComponent } from './for-loop/for-loop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ForLoopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

//basically a for loop
//a structural directive used to repeat a portion of HTML template once
//per each item for an iterable list
export class AppComponent {
  title = 'practise-app';
  message = 'online-learning';
  display = false;

  onClick() {
    this.display = !this.display;
  }
}
