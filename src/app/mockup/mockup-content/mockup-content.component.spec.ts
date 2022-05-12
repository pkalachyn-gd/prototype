import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupContentComponent } from './mockup-content.component';

describe('MockupContentComponent', () => {
  let component: MockupContentComponent;
  let fixture: ComponentFixture<MockupContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockupContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
