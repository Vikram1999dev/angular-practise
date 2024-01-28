import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Input()
  all = 0;

  @Input()
  inStock = 0;

  @Input()
  outOfStock = 0;

  //we are going to emit data of the string
  //whenever change event happens we want to inform it to parent component
  // now with this @Output() is used to parent component to know about it the event
  // defined in its child component that is filter component
  @Output()
  selectedFilterRBtnEvent = new EventEmitter<string>();

  selectedFilterRadioButton: string = 'all';

  //with ngModel two way data binding we dont have to write event as an argument
  //to handleSelectedRadioButton
  handleSelectedRadioButton() {
    this.selectedFilterRBtnEvent.emit(this.selectedFilterRadioButton);
  }
}
