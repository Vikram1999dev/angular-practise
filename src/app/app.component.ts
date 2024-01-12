import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './headers/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
//
export class AppComponent {
  title = 'practise-app';
}

//to create component
//1)Create a Typescript class and export it
//2)Decorate the class with @Component decorator
//3)Declare the class in main module file

//IMPORTANT
//child component folder should be always be inside parent component folder
// IMPORTANT
//Component is nothing but typescript class
