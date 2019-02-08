import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'slate-react';
import Html from 'slate-html-serializer';

import { plugins } from '../../helpers/articleHelpers/formatHelper';
import renderMark from '../../helpers/articleHelpers/renderMark';
import rules from '../../components/editor/SerializerRules';

const html = new Html({ rules });


/**
 * @description class components for the TextEditor
 */
class TextEditor extends Component {
  state = {
    value: html.deserialize(''),
  }

  /**
   * @description - function that updates the state when the user types
   * @return { null } - does not return anything
   */
  onChange = ({ value }) => {
    const content = html.serialize(value);
    this.props.setArticleBody(content);
    this.setState({ value });
  }

  /**
 * @param { object } nextProps
 * @returns
 * @memberof TextEditor
 * @returns { boolean } false
 */
  shouldComponentUpdate(nextProps) {
    if (this.props.body !== nextProps.body && nextProps.body !== null) {
      this.setState({ value: html.deserialize(nextProps.body) });
      return true;
    }
    return true;
  }

  /**
 * @description - function to render the component
 * @returns { jsx } returns jsx
 */
  render() {
    return (
      <Editor
        id="textEditor"
        className="editorBox"
        value={this.state.value}
        onChange={this.onChange}
        placeholder={'Tell your story here...'}
        plugins={plugins}
        renderMark={renderMark}
      />
    );
  }
}

TextEditor.propTypes = {
  setArticleBody: PropTypes.func,
  onChange: PropTypes.func,
  body: PropTypes.any,
};

export default TextEditor;
