/* eslint-disable max-len */
import verifyUser from '../decodeToken';


describe('## VerifyUser', () => {
  it('should decode Token', () => {
    expect(verifyUser()).toEqual(null);
  });

  it('should return a user when token exists and hasn\'t expired', () => {
    window.localStorage.setItem('token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI'
    + '6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    const user = verifyUser();
    expect(user).toEqual(undefined);
  });

  it('should return a user when token exists and hasn\'t expired', () => {
    window.localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.'
    + 'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLC'
    + 'JleHAiOjE1MTYyMzkwMjJ9.4Adcj3UFYzPUVaVF43FmMab6RlaQD8A9V8wFzzht-KQ');
    verifyUser();
    const user = verifyUser();
    expect(user).toEqual(null);
  });
});
