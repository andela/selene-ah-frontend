const tags = /<[^>]*>/gi;

const trimBody = (body) => {
  const replaceTags = body.replace(tags, '');
  const bodyCheck = `${replaceTags.slice(0, 40)} ...`;
  return (`<p>${bodyCheck}</p>`);
};
export default trimBody;
