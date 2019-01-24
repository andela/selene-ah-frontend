import renderHtml from 'react-render-html';

const trimBody = (body) => {
  const bodyCheck = `${body.split('</p>')[0].slice(0, 40)} ...`;
  return renderHtml(`${bodyCheck} </p>`);
};
export default trimBody;
