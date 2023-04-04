import { Component, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
isDark = false;

constructor(@Inject(DOCUMENT) private document: Document ) {}
onChage(newValue: boolean) {
  console.log(newValue);
  if (newValue) {
this.document.body.classList.add('dark-mode');
  } else {
    this.document.body.classList.remove('dark-mode');
  }
}
}
