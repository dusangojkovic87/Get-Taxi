import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToUsCardComponent } from './welcome-to-us-card.component';

describe('WelcomeToUsCardComponent', () => {
  let component: WelcomeToUsCardComponent;
  let fixture: ComponentFixture<WelcomeToUsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeToUsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeToUsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
