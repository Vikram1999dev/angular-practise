import { Component, Input } from '@angular/core';
import { ProductType } from '../types/product-type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input()
  prod?: ProductType;
}
