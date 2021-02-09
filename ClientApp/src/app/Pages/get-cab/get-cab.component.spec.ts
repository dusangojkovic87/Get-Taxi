import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCabComponent } from './get-cab.component';

describe('GetCabComponent', () => {
  let component: GetCabComponent;
  let fixture: ComponentFixture<GetCabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
