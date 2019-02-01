import validation from '../validations';

describe('## Validation class', () => {
  it('should return true if a valid email is supplied', () => {
    expect(validation.isEmailValid('dani@gmail.com')).toEqual(true);
  });

  it('should return false if an invalid password is supplied', () => {
    expect(validation.isPasswordValid('jjdjdj')).toEqual(false);
  });

  it('should return true if a valid name is supplied', () => {
    expect(validation.isNameValid('jjdjdj')).toEqual(true);
  });

  it('should return true if a valid username is supplied', () => {
    expect(validation.isUsernameValid('jjdjdj98')).toEqual(true);
  });

  it('should return false if password != confirmPassword', () => {
    expect(validation.verifyConfirmPassword('jjdjdj98', 'hdhdhdh'))
      .toEqual(false);
  });

  it('should return true if password is equal to confirmPassword', () => {
    expect(validation.verifyConfirmPassword('dan', 'dan')).toEqual(true);
  });

  it('should return true if a valid articleTitle is supplied', () => {
    expect(validation.isValidArticleTitle('jjdjdj98')).toEqual(true);
  });
});
