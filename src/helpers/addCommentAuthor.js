/**
 * @description - A function to add author details to a comment
 * @param {object} payload
 * @param {object} userDetails
 * @returns {object} - authors details
 */
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
