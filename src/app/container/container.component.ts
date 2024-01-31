import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerItemComponent } from '../container-item/container-item.component';
import { ContainerItem2Component } from '../container-item-2/container-item-2.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [CommonModule, ContainerItemComponent, ContainerItem2Component],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
//
// the input element is referred like this
// #searchInput
export class ContainerComponent {}
