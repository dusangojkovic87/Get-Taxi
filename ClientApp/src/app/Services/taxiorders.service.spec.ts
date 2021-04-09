import { TestBed } from '@angular/core/testing';

import { TaxiordersService } from './taxiorders.service';

describe('TaxiordersService', () => {
  let service: TaxiordersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiordersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
