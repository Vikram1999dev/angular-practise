import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  product = {
    name: 'iPhone',
    price: 999,
    color: 'Matte Black',
    discountedPrice: 8.5,
    inStock: 0,
  };

  getDiscountedPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.discountedPrice) / 100
    );
  }
}
