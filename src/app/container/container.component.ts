import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerChildComponent } from '../container-child/container-child.component';

@Component({
  selector: 'container',
  standalone: true,
  imports: [CommonModule, ContainerChildComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
//
//
export class ContainerComponent {
  @ViewChild('inputReference') selectedEle?: ElementRef;
  @ViewChild('childReference') selectedChildComponent?: ContainerChildComponent;
  handleChange(): void {
    console.log(this.selectedEle?.nativeElement.value);
    this.selectedChildComponent?.handleChangeChange();
  }
}
