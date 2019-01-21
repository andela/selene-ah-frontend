import helpers from '../helpers';

describe('## helpers', () => {
  const likedUser = [
    { userId: 2, id: 3, vote: 1 },
    { userId: 3, id: 4 },
  ];
  it('should return true if user is found', () => {
    expect(helpers(likedUser, 2)).toEqual(true);
  });

  it('should return false if user is not found', () => {
    expect(helpers(likedUser, 1)).toEqual(false);
  });
});
