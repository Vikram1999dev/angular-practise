import { Component, Input } from '@angular/core';

@Component({
  selector: 'container-item-2',
  standalone: true,
  imports: [],
  templateUrl: './container-item-2.component.html',
  styleUrl: './container-item-2.component.css',
})
export class ContainerItem2Component {
  @Input()
  secContainerRef?: string;
}
