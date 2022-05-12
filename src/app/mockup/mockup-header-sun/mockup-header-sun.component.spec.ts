import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupHeaderSunComponent } from './mockup-header-sun.component';

describe('MockupHeaderSunComponent', () => {
  let component: MockupHeaderSunComponent;
  let fixture: ComponentFixture<MockupHeaderSunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockupHeaderSunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupHeaderSunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
