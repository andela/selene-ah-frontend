import { isLikedByUser, followedByUser } from '../helpers/reactionHelpers';

describe('## helpers', () => {
  const likedUser = [
    { userId: 2, id: 3, vote: 1 },
    { userId: 3, id: 4 },
  ];

  const followUser = [
    { followerId: 2 },
    { followerId: 3 },
  ];
  it('should return true if user is found', () => {
    expect(isLikedByUser(likedUser, 2)).toEqual(true);
  });

  it('should return false if user is not found', () => {
    expect(isLikedByUser(likedUser, 1)).toEqual(false);
  });

  it('should return true if followerId is found', () => {
    expect(followedByUser(followUser, 2)).toEqual(true);
  });

  it('should return false if user is not found', () => {
    expect(followedByUser(followUser, 1)).toEqual(false);
  });
});
