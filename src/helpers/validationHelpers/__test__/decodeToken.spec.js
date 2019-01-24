import verifyUser from '../decodeToken';

describe('## VerifyUser', () => {
  it('should decode Token', () => {
    expect(verifyUser()).toEqual(null);
  });
});
