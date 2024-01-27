import { Component, Input } from '@angular/core';
import { ProductType } from '../types/product-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'container-compo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-compo.component.html',
  styleUrl: './container-compo.component.css',
})
export class ContainerCompoComponent {
  @Input()
  prod?: ProductType;
}
