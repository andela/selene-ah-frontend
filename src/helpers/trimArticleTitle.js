const tags = /<[^>]*>/gi;

/**
 * @description - A function to Slice text
 * @param {string} body
 * @returns {string} - sliced text of length 0 - 40
 */
const trimBody = (body) => {
  const replaceTags = body.replace(tags, '');
  const bodyCheck = `${replaceTags.slice(0, 40)} ...`;
  return (`<p>${bodyCheck}</p>`);
};
export default trimBody;
