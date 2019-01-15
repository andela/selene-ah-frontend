import validation from './signupValidations';

describe('##SignupValidations', () => {
  it('should return error object if an invalid email is supplied', () => {
    expect(validation({ type: 'email', content: 'daniels@gmail' }, {})).toEqual(
      { email: true },
    );
  });

  it('should return empty error object if a valid email is supplied', () => {
    expect(validation({ type: 'email', content: 'daniels@gmail.com' }, {}))
      .toEqual({ });
  });

  it('should return error object if an invalid password is supplied', () => {
    expect(validation({ type: 'password', content: 'daniel' }, {})).toEqual(
      { password: true },
    );
  });

  it('should return empty error object if a valid password is supplied', () => {
    expect(validation({ type: 'password', content: 'daniel123*' }, {})).toEqual(
      { },
    );
  });

  it('should return error object if an invalid name is supplied', () => {
    expect(validation({ type: 'firstName', content: 'dn' }, {})).toEqual(
      { firstName: true },
    );
  });

  it('should return empty error object if a valid name is supplied', () => {
    expect(validation({ type: 'firstName', content: 'dan' }, {})).toEqual(
      { },
    );
  });

  it('should return error object if an invalid lastname is supplied', () => {
    expect(validation({ type: 'lastName', content: 'dn' }, {})).toEqual(
      { lastName: true },
    );
  });

  it('should return empty error object if a valid lastname is supplied', () => {
    expect(validation({ type: 'lastName', content: 'dan' }, {})).toEqual(
      { },
    );
  });


  it('should return error object if an invalid username is supplied', () => {
    expect(validation({ type: 'userName', content: 'dn' }, {})).toEqual(
      { userName: true },
    );
  });

  it('should return empty error object if a valid username is supplied', () => {
    expect(validation({ type: 'userName', content: 'dan' }, {})).toEqual(
      { },
    );
  });

  it('should return empty object if field lastname is valid', () => {
    expect(validation({ type: 'lastName', content: 'dan' }, {})).toEqual(
      { },
    );
  });

  it('should return error object if field lastname is invalid', () => {
    expect(validation({ type: 'lastName', content: 'dn' }, {})).toEqual(
      { lastName: true },
    );
  });

  it('should return empty object if field lastname is valid', () => {
    expect(validation({ type: 'lastName', content: 'dan' }, {})).toEqual(
      { },
    );
  });

  it('should return empty object if an invalid case is supplied', () => {
    expect(validation({ type: 'lastname', content: 'dan' }, {})).toEqual(
      { },
    );
  });
});
