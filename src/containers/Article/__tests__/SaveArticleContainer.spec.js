import { mapStateToProps, mapDispatchToProps } from '../SaveArticleContainer';


const mockState = {
  categoryReducer: {},
  articleReducers: {},
  imageUploadReducers: {},
};

it('should return updated state as props', () => {
  expect(
    mapStateToProps(mockState),
  ).toEqual({});
});

it('should return updated state props', () => {
  const dispatch = jest.fn();

  expect(
    typeof mapDispatchToProps(dispatch),
  ).toEqual('object');
});
