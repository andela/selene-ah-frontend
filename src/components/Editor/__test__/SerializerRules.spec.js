import React from 'react';
import editorSerializer from '../SerializerRules';

let markObject = {
  object: 'mark',
  children: 'innertext',
};

describe('Editor serializer', () => {
  it('should render the bold mark correctly', () => {
    markObject = {
      ...markObject,
      type: 'bold',
      value: <strong>innertext</strong>,
    };
    expect(editorSerializer[1].serialize(markObject, markObject.children))
      .toEqual(markObject.value);
  });

  it('should render the italics mark correctly', () => {
    markObject = {
      ...markObject,
      type: 'italic',
      value: <em>innertext</em>,
    };
    expect(editorSerializer[1].serialize(markObject, markObject.children))
      .toEqual(markObject.value);
  });

  it('should render the underline mark correctly', () => {
    markObject = {
      ...markObject,
      type: 'underline',
      value: <u>innertext</u>,
    };
    expect(editorSerializer[1].serialize(markObject, markObject.children))
      .toEqual(markObject.value);
  });

  it('should not render if no match is found', () => {
    markObject = {
      ...markObject,
      type: 'paragraph',
      value: <p>innertext</p>,
    };
    expect(editorSerializer[1].serialize(markObject, markObject.children))
      .toEqual(undefined);
  });

  it('should render the a code block correctly', () => {
    markObject = {
      ...markObject,
      object: 'block',
      type: 'code',
      value: <pre><code>innertext</code></pre>,
    };
    expect(editorSerializer[0].serialize(markObject, markObject.children))
      .toEqual(markObject.value);
  });

  it('should render the a blockquote block correctly', () => {
    markObject = {
      ...markObject,
      object: 'block',
      type: 'quote',
      value: <blockquote>innertext</blockquote>,
    };
    expect(editorSerializer[0].serialize(markObject, markObject.children))
      .toEqual(markObject.value);
  });

  it('should not render if no match is found', () => {
    markObject = {
      ...markObject,
      type: 'bold',
    };
    expect(editorSerializer[0].serialize(markObject, markObject.children))
      .toEqual(undefined);
  });

  it('should deserialize a mark', () => {
    const element = {
      tagName: 'em',
      childNodes: <em>this is it</em>,
      getAttribute: jest.fn(),
    };

    const resultObject = { nodes: undefined, object: 'mark', type: 'italic' };
    const next = jest.fn();
    const deserializeSpy = jest.spyOn(editorSerializer[1], 'deserialize');
    const deserialize = editorSerializer[1].deserialize(element, next);
    expect(deserializeSpy).toHaveBeenCalled();
    expect(deserialize).toEqual(resultObject);
  });

  it('should not deserialize a mark', () => {
    const element = {
      tagName: 'pre',
      childNodes: <pre>this is it</pre>,
      getAttribute: jest.fn(),
    };

    const resultObject = {
      nodes: undefined,
      object: 'block',
      type: 'code',
      data: {
        className: undefined,
      },
    };
    const next = jest.fn();
    const deserializeSpy = jest.spyOn(editorSerializer[0], 'deserialize');
    const deserialize = editorSerializer[0].deserialize(element, next);
    expect(deserializeSpy).toHaveBeenCalled();
    expect(deserialize).toEqual(resultObject);
  });
});
