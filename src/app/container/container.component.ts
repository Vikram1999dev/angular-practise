import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';
import { ProductType } from '../types/product-type';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [CommonModule, FilterComponent, ProductItemComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
//
// 1.selectedFilterRBtnEvent this is an event emitter defined
// which will emit an event when radio button is selected
// to use it we define under @Output()
// 2.selectedFilterRBtnEvent will be defined as event binding in container.component.html file
// 3.onFilterChanged method will be triggered by this event
export class ContainerComponent {
  products: ProductType[] = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category A',
      price: 29.99,
      inStock: true,
      specifications: {
        weight: 1.5,
        dimensions: {
          length: 10,
          width: 5,
          height: 3,
        },
        colors: ['Red', 'Blue', 'Green'],
      },
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category B',
      price: 39.99,
      inStock: false,
      specifications: {
        weight: 2.0,
        dimensions: {
          length: 8,
          width: 6,
          height: 4,
        },
        colors: ['Yellow', 'Purple', 'Orange'],
      },
    },
    {
      id: 3,
      name: 'Product 3',
      category: 'Category A',
      price: 49.99,
      inStock: true,
      specifications: {
        weight: 1.8,
        dimensions: {
          length: 12,
          width: 4,
          height: 2,
        },
        colors: ['Black', 'White', 'Gray'],
      },
    },
    {
      id: 4,
      name: 'Product 4',
      category: 'Category C',
      price: 19.99,
      inStock: false,
      specifications: {
        weight: 1.2,
        dimensions: {
          length: 15,
          width: 3,
          height: 5,
        },
        colors: ['Brown', 'Pink', 'Cyan'],
      },
    },
    {
      id: 5,
      name: 'Product 5',
      category: 'Category B',
      price: 59.99,
      inStock: true,
      specifications: {
        weight: 2.5,
        dimensions: {
          length: 7,
          width: 7,
          height: 7,
        },
        colors: ['Gold', 'Silver', 'Bronze'],
      },
    },
    {
      id: 6,
      name: 'Product 6',
      category: 'Category A',
      price: 69.99,
      inStock: true,
      specifications: {
        weight: 1.5,
        dimensions: {
          length: 9,
          width: 6,
          height: 3,
        },
        colors: ['Magenta', 'Turquoise', 'Lime'],
      },
    },
    {
      id: 7,
      name: 'Product 7',
      category: 'Category C',
      price: 79.99,
      inStock: false,
      specifications: {
        weight: 2.2,
        dimensions: {
          length: 11,
          width: 5,
          height: 4,
        },
        colors: ['Violet', 'Indigo', 'Amber'],
      },
    },
  ];

  finalProducts: ProductType[] = this.products;

  productCount = this.products.length;
  productInStock = this.products.filter((p) => p.inStock);
  productOutOfStock = this.products.filter((p) => !p.inStock);

  onFilterChanged(value: string) {
    if (value === 'all') {
      this.finalProducts = this.products;
    } else if (value === 'inStock') {
      this.finalProducts = this.productInStock;
    } else {
      this.finalProducts = this.productOutOfStock;
    }
  }
}
