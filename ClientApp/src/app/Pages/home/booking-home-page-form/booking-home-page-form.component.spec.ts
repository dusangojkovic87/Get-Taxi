import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHomePageFormComponent } from './booking-home-page-form.component';

describe('BookingHomePageFormComponent', () => {
  let component: BookingHomePageFormComponent;
  let fixture: ComponentFixture<BookingHomePageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingHomePageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingHomePageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
