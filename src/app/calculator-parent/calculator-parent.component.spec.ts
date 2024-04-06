import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorParentComponent } from './calculator-parent.component';

describe('CalculatorParentComponent', () => {
  let component: CalculatorParentComponent;
  let fixture: ComponentFixture<CalculatorParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
