import { Component } from '@angular/core';

@Component({
  selector: 'container-child',
  standalone: true,
  imports: [],
  templateUrl: './container-child.component.html',
  styleUrl: './container-child.component.css',
})
export class ContainerChildComponent {
  handleChangeChange() {
    console.log('hello');
  }
}
