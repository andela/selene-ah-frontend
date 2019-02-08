import React from 'react';
import { shallow } from 'enzyme';
import Html from 'slate-html-serializer';
import TextEditor from '../TextEditor';
import rules from '../../../components/editor/SerializerRules';

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

describe('TextEditor component', () => {
  const wrapper = shallow(<TextEditor />);
  const props = {
    body: 'content',
  };

  it('It should update the state when the user types the article content',
    () => {
      const value = html.deserialize(slateArticleBody.value);
      wrapper.setProps({ setArticleBody: jest.fn() });
      const onChangeHandler = wrapper.instance().onChange({ value });
      expect(onChangeHandler).toEqual(undefined);
    });

  it('should update the state with the article body', () => {
    const callValue = wrapper.instance().shouldComponentUpdate(props);
    expect(callValue).toEqual(true);
  });
});
