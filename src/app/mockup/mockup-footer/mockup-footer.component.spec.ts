import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupFooterComponent } from './mockup-footer.component';

describe('MockupFooterComponent', () => {
  let component: MockupFooterComponent;
  let fixture: ComponentFixture<MockupFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockupFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
