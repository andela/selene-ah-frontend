import moxios from 'moxios';
import uploadImage from '../imageUpload';

describe('uploadImage function tests', () => {
  const mockedFormData = jest.fn(() => ({ append: jest.fn() }));
  const mockedResponse = {
    status: 200,
    data: 'some data',
  };
  const imageUrl = `${process.env.CLOUDINARY_API_BASE_URL}`;
  window.FormData = mockedFormData;
  const image = new Blob();

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should work when successful', async () => {
    moxios.stubRequest(imageUrl, mockedResponse);
    await uploadImage(image);

    expect(mockedFormData).toBeCalled();
  });

  it('should fail when unsuccessful', async () => {
    mockedResponse.status = 400;
    moxios.stubRequest(imageUrl, mockedResponse);
    await uploadImage(image);

    expect(mockedFormData).toBeCalledTimes(2);
  });
});
