import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './headers/header.component';

//to add bootstrap in project go to angular.json file
//and
//in styles array add this
// node_modules/bootstrap/dist/css/bootstrap.min.css

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
