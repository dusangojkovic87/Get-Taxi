import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutServiceCardComponent } from './about-service-card.component';

describe('AboutServiceCardComponent', () => {
  let component: AboutServiceCardComponent;
  let fixture: ComponentFixture<AboutServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutServiceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
