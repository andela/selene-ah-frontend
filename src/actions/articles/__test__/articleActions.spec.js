import moxios from 'moxios';
import * as articleActionTypes from '../articleActionTypes';
import articleActions, {
  createArticle,
  createArticleFailure,
  createArticleSuccess,
} from '../articleActions';

const url = `${process.env.SERVER_API}/article`;
const dispatch = jest.fn();
const fakeArticleObject = {
  title: 'title of article',
  body: 'body of article',
  imageUrl: 'pic.jpg',
  categoryId: '90u0eurjolisjdflsjflaskjdlfse',
};

const mockResponse = {
  response: {
    data: {
      message: 'response message',
    },
  },
};

describe('Test the article actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('should return an action if CREATE_ARTICLE is triggerd', () => {
    expect(createArticle()).toEqual({
      type: articleActionTypes.CREATE_ARTICLE,
    });
  });

  it('should return an action if CREATE_ARTICLE_SUCCESS is triggerd', () => {
    expect(createArticleSuccess()).toEqual({
      type: articleActionTypes.CREATE_ARTICLE_SUCCESS,
    });
  });

  it('should return an action if CREATE_ARTICLE_FAILURE is triggerd', () => {
    expect(createArticleFailure()).toEqual({
      type: articleActionTypes.CREATE_ARTICLE_FAILURE,
    });
  });

  it('should call the create article dispatch function', async () => {
    moxios.stubRequest(url, mockResponse);
    await articleActions(fakeArticleObject)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: articleActionTypes.CREATE_ARTICLE,
    });
  });

  it('should call the create article failed dispatch function', async () => {
    moxios.stubRequest(url, { status: 400 });
    await articleActions(fakeArticleObject, { push() {} })(dispatch);
    expect(dispatch).toBeCalledTimes(4);
  });
});
