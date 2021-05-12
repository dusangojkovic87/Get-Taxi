import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCarClassCardComponent } from './choose-car-class-card.component';

describe('ChooseCarClassCardComponent', () => {
  let component: ChooseCarClassCardComponent;
  let fixture: ComponentFixture<ChooseCarClassCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseCarClassCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseCarClassCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
