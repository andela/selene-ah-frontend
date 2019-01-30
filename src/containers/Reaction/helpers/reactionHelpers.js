export const isLikedByUser = (likedUsers, userId) => {
  const isLiked = likedUsers.filter(
    user => user.userId === userId && user.vote === 1,
  );
  return isLiked.length === 1;
};

export const followedByUser = (followers, userId) => {
  const isFollowers = followers.filter(
    follower => follower.followerId === userId,
  );
  return isFollowers.length === 1;
};
