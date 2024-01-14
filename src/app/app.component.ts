import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './headers/header.component';

// In Angular, the styles of a parent component are typically encapsulated to
// avoid affecting the styles of its child components. This is achieved
// through a mechanism called View Encapsulation.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  //it can also be array of style files
  styleUrl: './app.component.css',
})
//
export class AppComponent {
  title = 'practise-app';
}

//if we want to apply css globally use style.css file in src folder
