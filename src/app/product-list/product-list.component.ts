import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  name = 'John Doe';
  quantity: number = 0;
  quantityZero: string = 'No Product';
  product = {
    name: 'iPhone',
    price: 999,
    color: 'Matte Black',
    discountedPrice: 8.5,
    inStock: 0,
    pImg: '../../assets/images/messi.jpg',
  };

  getDiscountedPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.discountedPrice) / 100
    );
  }

  onNameChange(e: Event) {
    this.name = (e.target as HTMLInputElement).value;
  }

  handleIncrement() {
    this.quantity++;
  }

  handleDecrement() {
    if (this.quantity > 0) {
      this.quantity--;
    } else {
      this.quantityZero = 'No Product';
    }
  }
}
