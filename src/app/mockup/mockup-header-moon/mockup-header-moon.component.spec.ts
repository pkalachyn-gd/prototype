import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupHeaderMoonComponent } from './mockup-header-moon.component';

describe('MockupHeaderMoonComponent', () => {
  let component: MockupHeaderMoonComponent;
  let fixture: ComponentFixture<MockupHeaderMoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockupHeaderMoonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupHeaderMoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
