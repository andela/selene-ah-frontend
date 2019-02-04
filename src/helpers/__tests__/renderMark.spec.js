import React from 'react';
import renderMark from '../articleHelpers/renderMark';

const next = jest.fn();
const props = {
  bold: {
    mark: {
      type: 'bold',
      value: <strong>Text to display</strong>,
    },
    children: 'Text to display',
  },
  code: {
    mark: {
      type: 'code',
      value: <code>Text to display</code>,
    },
    children: 'Text to display',
  },
  italic: {
    mark: {
      type: 'italic',
      value: <em>Text to display</em>,
    },
    children: 'Text to display',
  },
  strikethrough: {
    mark: {
      type: 'strikethrough',
      value: <del>Text to display</del>,
    },
    children: 'Text to display',
  },
  underline: {
    mark: {
      type: 'underline',
      value: <u>Text to display</u>,
    },
    children: 'Text to display',
  },
  paragraph: {
    mark: {
      type: 'paragraph',
      value: <p>Text to display</p>,
    },
    children: 'Text to display',
  },
};

describe('renderMark', () => {
  it('should render the bold mark', () => {
    const boldMark = renderMark(props.bold, {}, next);
    expect(boldMark).toEqual(props.bold.mark.value);
  });

  it('should render the code block', () => {
    const codeBlock = renderMark(props.code, {}, next);
    expect(codeBlock).toEqual(props.code.mark.value);
  });

  it('should render the strikethrough mark', () => {
    const strikeMark = renderMark(props.strikethrough, {}, next);
    expect(strikeMark).toEqual(props.strikethrough.mark.value);
  });

  it('should render the italic mark', () => {
    const italicMark = renderMark(props.italic, {}, next);
    expect(italicMark).toEqual(props.italic.mark.value);
  });

  it('should render the underline mark', () => {
    const underlineMark = renderMark(props.underline, {}, next);
    expect(underlineMark).toEqual(props.underline.mark.value);
  });

  it('should render the default mark', () => {
    const paragraphBlock = renderMark(props.paragraph, {}, next);
    expect(paragraphBlock).toEqual(undefined);
  });
});
