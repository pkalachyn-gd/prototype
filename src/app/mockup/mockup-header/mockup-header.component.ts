import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mockup-header',
  templateUrl: './mockup-header.component.html',
  styleUrls: ['./mockup-header.component.scss'],
  host: {class: 'placeholder placeholder-row'}
})
export class MockupHeaderComponent implements OnInit {
  numRep = 123;
  constructor() { 
  }
  
  ngOnInit(): void {
    setTimeout(() => this.numRep += 120, 3000);
  }

}
