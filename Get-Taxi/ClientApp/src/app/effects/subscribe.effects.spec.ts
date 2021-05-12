import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SubscribeEffects } from './subscribe.effects';

describe('SubscribeEffects', () => {
  let actions$: Observable<any>;
  let effects: SubscribeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SubscribeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SubscribeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
