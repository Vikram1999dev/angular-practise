import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'container-item',
  standalone: true,
  imports: [],
  templateUrl: './container-item.component.html',
  styleUrl: './container-item.component.css',
})
export class ContainerItemComponent {
  @Output()
  reference?: string ='hello';
}
