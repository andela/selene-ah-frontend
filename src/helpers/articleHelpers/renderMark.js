import React from 'react';

/**
 * @description - add editor effect to text
 * @param {object} props
 * @param {object} editor
 * @param {Function} next
 * @returns {object} - effects to be added to text
 */
const renderMark = (props, editor, next) => {
  switch (props.mark.type) {
  case 'bold':
    return <strong>{props.children}</strong>;
  case 'code':
    return <code>{props.children}</code>;
  case 'italic':
    return <em>{props.children}</em>;
  case 'strikethrough':
    return <del>{props.children}</del>;
  case 'underline':
    return <u>{props.children}</u>;
  default:
    return next();
  }
};

export default renderMark;
