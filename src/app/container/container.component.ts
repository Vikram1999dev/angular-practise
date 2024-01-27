import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from '../filter/filter.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [CommonModule, FilterComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
//
// we need to add @Input decorator in order to grab the info from parent
export class ContainerComponent {}
