import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsChildComponent } from './operations-child.component';

describe('OperationsChildComponent', () => {
  let component: OperationsChildComponent;
  let fixture: ComponentFixture<OperationsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperationsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
