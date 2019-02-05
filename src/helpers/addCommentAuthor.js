
const addCommentAuthor = (payload, userDetails) => {
  const author = {
    userName: userDetails.userName,
    imageUrl: userDetails.imageUrl,
    bio: userDetails.bio,
  };
  payload.author = author;
  return payload;
};

export default addCommentAuthor;
