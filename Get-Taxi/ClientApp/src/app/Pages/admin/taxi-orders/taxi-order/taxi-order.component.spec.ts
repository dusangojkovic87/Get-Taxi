import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiOrderComponent } from './taxi-order.component';

describe('TaxiOrderComponent', () => {
  let component: TaxiOrderComponent;
  let fixture: ComponentFixture<TaxiOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
