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

// angular.json file
//this file contains all the configuration of the angular project

// package-lock.json
//this file records every version of installed dependency including the subdependency
//and their version
//the purpose of this file is that it ensures the same dependencies are installed
//consistently across every different environment
//in development environment,production environment,integration environment
//so all in this environment same depenedency should get installed

// ./src/app
//this folder gets created
//whenever you want to create any component, service or module
//you need to create within this app folder
