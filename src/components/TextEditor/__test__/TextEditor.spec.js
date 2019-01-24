import React from 'react';
import { shallow } from 'enzyme';
import Html from 'slate-html-serializer';
import TextEditor from '../TextEditor';
import rules from '../editorSerializer';

const html = new Html({ rules });

const slateArticleBody = {
  value: {
    object: 'value',
    document: {
      object: 'document',
      data: {},
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          data: {},
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  object: 'leaf',
                  text: 'This is the title of the article',
                  marks: [],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  operations: [
    {
      object: 'operation',
      type: 'insert_text',
      path: [
        0,
        0,
      ],
      offset: 31,
      text: 'e',
      marks: [],
      data: {},
    },
  ],
};

const initialValue = '<p>Tell your story here...</p>';

describe('TextEditor component', () => {
  const wrapper = shallow(<TextEditor />);
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
  const next = jest.fn();

  it('It should update the state when the user types the article content',
    () => {
      const value = html.deserialize(slateArticleBody.value);
      wrapper.setProps({ getArticleBody: jest.fn() });
      const onChangeHandler = wrapper.instance().onChange({ value });
      expect(onChangeHandler).toEqual(undefined);
    });

  it('should check if the user has clicked the article input area', () => {
    wrapper.instance().onClick();
  });

  it('should update the state when the user clicks for the first time', () => {
    wrapper.setState({ value: html.deserialize(initialValue) });
    wrapper.instance().onClick();
  });

  it('should render the bold mark', () => {
    expect(wrapper.instance().renderMark(props.bold, {}, next))
      .toEqual(props.bold.mark.value);
  });

  it('should render the code mark', () => {
    expect(wrapper.instance().renderMark(props.code, {}, next))
      .toEqual(props.code.mark.value);
  });

  it('should render the strikethrough mark', () => {
    expect(wrapper.instance().renderMark(props.strikethrough, {}, next))
      .toEqual(props.strikethrough.mark.value);
  });

  it('should render the italic mark', () => {
    expect(wrapper.instance().renderMark(props.italic, {}, next))
      .toEqual(props.italic.mark.value);
  });

  it('should render the underline mark', () => {
    expect(wrapper.instance().renderMark(props.underline, {}, next))
      .toEqual(props.underline.mark.value);
  });

  it('should render the default mark', () => {
    wrapper.instance().renderMark(props.paragraph, {}, next);
    expect(next).toHaveBeenCalled();
  });
});
