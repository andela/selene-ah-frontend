import moxios from 'moxios';
import * as imageUploadActionTypes from '../actionTypes';
import uploadImageAction, {
  uploadImageFailure,
  uploadImageSuccess,
  uploadImage,
} from '../imageUploadActions';

const url = `${process.env.CLOUDINARY_API_BASE_URL}`;
const dispatch = jest.fn();

const mockResponse = {
  response: {
    data: {
      message: 'response message',
    },
  },
};

const fakeImage = new Blob();

describe('Test the article actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('should return an action if CREATE_ARTICLE is triggerd', () => {
    expect(uploadImage()).toEqual({
      type: imageUploadActionTypes.UPLOAD_IMAGE,
    });
  });

  it('should return an action if CREATE_ARTICLE_SUCCESS is triggered', () => {
    expect(uploadImageSuccess()).toEqual({
      type: imageUploadActionTypes.UPLOAD_IMAGE_SUCCESS,
    });
  });

  it('should return an action if CREATE_ARTICLE_FAILURE is triggerd', () => {
    expect(uploadImageFailure()).toEqual({
      type: imageUploadActionTypes.UPLOAD_IMAGE_FAILURE,
    });
  });

  it('should call the fetch category dispatch function', async () => {
    moxios.stubRequest(url, mockResponse);
    await uploadImageAction(fakeImage)(dispatch);
    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: imageUploadActionTypes.UPLOAD_IMAGE,
    });
  });

  it('should call the upload image failed dispatch function', async () => {
    moxios.stubRequest(url, { status: 400 });
    await uploadImageAction(fakeImage, { push() {} })(dispatch);
    expect(dispatch).toBeCalledTimes(4);
  });
});
