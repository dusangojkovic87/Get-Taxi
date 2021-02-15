import * as SubscribeActions from './subscribe.actions';

describe('Subscribe', () => {
  it('should create an instance', () => {
    expect(new SubscribeActions.LoadSubscribes()).toBeTruthy();
  });
});
