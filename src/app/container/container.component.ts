import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductType } from '../types/product-type';
import { ContainerCompoComponent } from '../container-compo/container-compo.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [CommonModule, ContainerCompoComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  products: ProductType[] = [
    {
      id: 1,
      name: 'Laptop',
      category: 'Electronics',
      price: 1200,
      inStock: true,
      specifications: {
        weight: 2.5,
        dimensions: {
          length: 14,
          width: 10,
          height: 1,
        },
        colors: ['silver', 'gold', 'skyblue'],
        material: 'Aluminum',
        additionalAttribute1: 'High Resolution Display',
        additionalAttribute2: 16,
        additionalAttribute3: true,
        additionalAttribute4: ['Touchscreen', 'Backlit Keyboard'],
        additionalAttribute5: new Date('2024-01-23'),
      },
    },
    {
      id: 2,
      name: 'Running Shoes',
      category: 'Footwear',
      price: 80,
      inStock: false,
      specifications: {
        weight: 0.8,
        dimensions: {
          length: 12,
          width: 4,
          height: 6,
        },
        colors: ['blue', 'yellow', 'orange'],
        material: 'Mesh',
        additionalAttribute1: 'Cushioned Insole',
        additionalAttribute2: 10,
        additionalAttribute3: false,
        additionalAttribute4: ['Breathable', 'Shock Absorption'],
        additionalAttribute5: new Date('2024-01-24'),
      },
    },
    {
      id: 3,
      name: 'Coffee Maker',
      category: 'Appliances',
      price: 50,
      inStock: true,
      specifications: {
        weight: 3,
        dimensions: {
          length: 8,
          width: 6,
          height: 12,
        },
        colors: ['black', 'blue', 'red'],
        material: 'Plastic',
        additionalAttribute1: 'Programmable Timer',
        additionalAttribute2: 8,
        additionalAttribute3: true,
        additionalAttribute4: ['Auto Shut-off', 'Easy to Clean'],
        additionalAttribute5: new Date('2024-01-25'),
      },
    },
  ];
}
