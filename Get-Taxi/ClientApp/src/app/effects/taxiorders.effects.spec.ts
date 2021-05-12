import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TaxiordersEffects } from './taxiorders.effects';

describe('TaxiordersEffects', () => {
  let actions$: Observable<any>;
  let effects: TaxiordersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TaxiordersEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TaxiordersEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
