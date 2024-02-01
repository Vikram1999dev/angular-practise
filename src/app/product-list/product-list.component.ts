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
//
//
// 1)Text Content Binding:
// Syntax: [textContent]="expression"
//
//2)Hidden Property Binding:
// Syntax: [hidden]="expression"
//
//
//3)Placeholder Property Binding (for Input Elements):
// Syntax: [placeholder]="expression"
//
//4)Href Property Binding (for Anchor Elements):
// Syntax: [href]="expression"
//
//5)Target Property Binding (for Anchor Elements):
// Syntax: [target]="expression"
//
//6)Checked Property Binding (for Checkbox or Radio Input Elements):
// Syntax: [checked]="expression"
//
//7)Src Property Binding (for Images):
// Syntax: [src]="expression"
export class ProductListComponent {
  name = 'John Doe';
  product = {
    name: 'iPhone',
    price: 999,
    color: 'Matte Black',
    discountedPrice: 8.5,
    inStock: 0,
    pImg: '../../assets/images/messi.jpg',
  };

  textOfPTage?: string;
  link = 'contact';
  imgUrl = '../../assets/images/messi.jpg';

  getDiscountedPrice() {
    return (
      this.product.price -
      (this.product.price * this.product.discountedPrice) / 100
    );
  }
}
