import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopHeaderComponent } from './top-header/top-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TopHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

//to generate component using cli
// we type command ng g c topHeader
//
//
// to create child component of any component
// you have to go inside the component folder
// and type that cli command
//
//
// for child component to be used inside the parent component
//call the child component selector inside the parent html file
//and also import its class in parent's ts file
//
// *********************************************
//I created a component folder outside its parent
// earlier the child component should be created inside the parent component folder
//to be used AND NOW that is not the case.
// that's the power of standalone component
export class AppComponent {
  title = 'practise-app';
}
