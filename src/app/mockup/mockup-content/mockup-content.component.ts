import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mockup-content',
  templateUrl: './mockup-content.component.html',
  styleUrls: ['./mockup-content.component.scss'],
  host: {class:'placeholder'}
})
export class MockupContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
