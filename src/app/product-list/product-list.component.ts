import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
//
//
//1)Change Event Binding:
// Syntax: (change)="expression"
//
//2)Mouseover Event Binding:
// Syntax: (mouseover)="expression"
//
//3)Mouseout Event Binding:
// Syntax: (mouseout)="expression"
//
//4)Keyup Event Binding:
// Syntax: (keyup)="expression"
//A function is triggered when the user releases a key in the input field.
//
//
//5)Submit Event Binding:
// Syntax: (submit)="expression"
//
//6)Blur Event Binding:
// Syntax: (blur)="expression"
//
// 7)Focus Event Binding:
// Syntax: (focus)="expression"
//
// 8)DoubleClick Event Binding:
// Syntax: (dblclick)="expression"
//
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

  handleSelectChange(e: Event) {
    console.log('the select change is ', (e.target as HTMLSelectElement).value);
  }

  handleMouseOver() {
    console.log('hovering');
  }

  handleMouseOut() {
    console.log('bye bye');
  }

  handleKeyUp(e: Event) {
    console.log('the key value is ', (e.target as HTMLSelectElement).value);
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    console.log('submitted');
  }

  handleBlur() {
    console.log('blurred out');
  }

  handleFocus() {
    console.log('focus in');
  }

  handleDoubleClick() {
    console.log('double clicked');
  }
}
