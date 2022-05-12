import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mockup-header-sun',
  templateUrl: './mockup-header-sun.component.html',
  styleUrls: ['./mockup-header-sun.component.scss'],
  host: { class: 'placeholder' },
})
export class MockupHeaderSunComponent {
  @Input() greeting = 'Hi';
  @Input() numRepetions = 0; // inferred type
}
