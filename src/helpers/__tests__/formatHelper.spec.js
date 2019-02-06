import { FormatHandler } from '../articleHelpers/formatHelper';

describe('Format Helper', () => {
  const editor = {
    toggleMark: jest.fn(),
  };
  const next = jest.fn();

  it('should return an event handler for each command', () => {
    const options = { type: 'bold', key: 'b' };
    const eventHandler = FormatHandler(options);
    const event = {
      key: 'b',
      preventDefault: jest.fn(),
      ctrlKey: true,
    };
    eventHandler.onKeyDown(event, editor, next);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(editor.toggleMark).toHaveBeenCalled();
  });

  it('should toggle the mark', () => {
    const options = { type: 'bold', key: 'b' };
    const eventHandler2 = FormatHandler(options);
    const event = {
      preventDefault: jest.fn(),
      key: 'f',
      ctrlKey: true,
    };
    eventHandler2.onKeyDown(event, editor, next);
    expect(next).toHaveBeenCalled();
  });
});
