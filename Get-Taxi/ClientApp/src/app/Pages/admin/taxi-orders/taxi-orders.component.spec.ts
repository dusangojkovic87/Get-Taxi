import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxiOrdersComponent } from './taxi-orders.component';

describe('TaxiOrdersComponent', () => {
  let component: TaxiOrdersComponent;
  let fixture: ComponentFixture<TaxiOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxiOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxiOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
