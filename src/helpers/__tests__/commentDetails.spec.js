import comment from '../../../__mocks__/comment';
import addCommentAuthor from '../addCommentAuthor';

describe('## VerifyUser', () => {
  const userdetails = jest.fn();
  it('should decode Token', () => {
    expect(addCommentAuthor(comment, userdetails)).toEqual(comment);
  });
});
