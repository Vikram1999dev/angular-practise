import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
//
// the input element is referred like this
// #searchInput
export class ContainerComponent {
  handleButtonChange(inputEle: HTMLInputElement) {
    console.log(inputEle.value);
  }
}
