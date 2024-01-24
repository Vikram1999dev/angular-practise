import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  show = false;

  toggleShow() {
    this.show = !this.show;
  }
}
