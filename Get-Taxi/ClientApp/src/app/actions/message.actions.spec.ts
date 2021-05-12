import * as MessageActions from './message.actions';

describe('Message', () => {
  it('should create an instance', () => {
    expect(new MessageActions.LoadMessages()).toBeTruthy();
  });
});
