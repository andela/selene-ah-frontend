import dateStamp from '../dateStamp';

describe('DateStamp Test', () => {
  it('should return a date string', () => {
    expect(dateStamp('2019-01-21T12:48:54.830Z')).toEqual('21 Jan');
  });
});
