import { Component } from '@angular/core';
import { TopHeaderChildComponent } from './top-header-child/top-header-child.component';
import { CompoOutsideItsParentFolderComponent } from '../compo-outside-its-parent-folder/compo-outside-its-parent-folder.component';

@Component({
  selector: 'top-header',
  standalone: true,
  imports: [TopHeaderChildComponent, CompoOutsideItsParentFolderComponent],
  templateUrl: './top-header.component.html',
  styleUrl: './top-header.component.css',
})
export class TopHeaderComponent {}
