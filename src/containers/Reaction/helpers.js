const isLikedByUser = (likedUsers, userId) => {
  const isLiked = likedUsers.filter(
    user => user.userId === userId && user.vote === 1,
  );
  return isLiked.length === 1;
};

export default isLikedByUser;
