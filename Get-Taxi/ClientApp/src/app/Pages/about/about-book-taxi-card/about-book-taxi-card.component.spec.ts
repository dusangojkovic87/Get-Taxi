import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutBookTaxiCardComponent } from './about-book-taxi-card.component';

describe('AboutBookTaxiCardComponent', () => {
  let component: AboutBookTaxiCardComponent;
  let fixture: ComponentFixture<AboutBookTaxiCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutBookTaxiCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutBookTaxiCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
