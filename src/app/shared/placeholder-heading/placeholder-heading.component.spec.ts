import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderHeadingComponent } from './placeholder-heading.component';

describe('PlaceholderHeadingComponent', () => {
  let component: PlaceholderHeadingComponent;
  let fixture: ComponentFixture<PlaceholderHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
