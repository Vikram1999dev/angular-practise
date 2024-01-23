import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'for-loop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css',
})
export class ForLoopComponent {
  loopNumber = [1, 2, 3, 4, 5];
}
