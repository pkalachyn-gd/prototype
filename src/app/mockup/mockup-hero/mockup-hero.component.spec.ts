import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupHeroComponent } from './mockup-hero.component';

describe('MockupHeroComponent', () => {
  let component: MockupHeroComponent;
  let fixture: ComponentFixture<MockupHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockupHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
