import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceholderRowComponent } from './placeholder-row.component';

describe('PlaceholderRowComponent', () => {
  let component: PlaceholderRowComponent;
  let fixture: ComponentFixture<PlaceholderRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceholderRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceholderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
