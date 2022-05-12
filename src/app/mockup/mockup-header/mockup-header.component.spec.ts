import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupHeaderComponent } from './mockup-header.component';

describe('MockupHeaderComponent', () => {
  let component: MockupHeaderComponent;
  let fixture: ComponentFixture<MockupHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockupHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
