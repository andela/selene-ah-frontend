import React, { Component } from 'react';
import { Editor } from 'slate-react';
import Html from 'slate-html-serializer';
import PropTypes from 'prop-types';
import { plugins } from './Formatters/FormatHelper';
import rules from './editorSerializer';

// Create a new serializer instance with our `rules` from above.
const html = new Html({ rules });

const initialValue = '<p>Tell your story here...</p>';

/**
 * @description class components for the TextEditor
 */
class TextEditor extends Component {
  state = {
    value: html.deserialize(initialValue),
  }

  /**
   * @description - function that updates the state when the user types
   * @return { null } - does not return anything
   */
  onChange = ({ value }) => {
    const content = html.serialize(value);
    this.props.getArticleBody(content);
    this.setState({ value });
  }

  /**
   * @description - function that clears the editor
   * @return { null } - does not return anything
   */
  onClick = () => {
    if (html.serialize(this.state.value) === initialValue) {
      this.setState({ value: html.deserialize('') });
    }
  }

  /**
   * @memberof TextEditor
   * @description - method to render nodesdsf
   * @param { object } props PropTypes.object,
   * @param { object } editor object
   * @param { object } next
   * @returns { object } jsx or function
   */
  renderMark = (props, editor, next) => {
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
  }

  /**
 * @description - function to render the component
 * @returns { jsx } returns jsx
 */
  render() {
    return (
      <Editor
        id="textEditor"
        value={this.state.value}
        onChange={this.onChange}
        onClick={this.onClick}
        plugins={plugins}
        renderMark={this.renderMark}
        className={this.props.classes}
      />
    );
  }
}

TextEditor.propTypes = {
  classes: PropTypes.string,
  getArticleBody: PropTypes.func,
};

export default TextEditor;
