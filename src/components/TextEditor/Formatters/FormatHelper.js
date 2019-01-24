export const FormatHandler = (options) => {
  const { type, key } = options;

  return {
    onKeyDown(event, editor, next) {
      if ((!event.ctrlKey && !event.metaKey)
      || event.key !== key) return next();
      event.preventDefault();
      editor.toggleMark(type);
    },
  };
};

export const plugins = [
  FormatHandler({ key: 'b', type: 'bold' }),
  FormatHandler({ key: '`', type: 'code' }),
  FormatHandler({ key: 'i', type: 'italic' }),
  FormatHandler({ key: '-', type: 'strikethrough' }),
  FormatHandler({ key: 'u', type: 'underline' }),
];
