import helpers from '../../../../helpers/validationHelpers/validations';

/* eslint no-unused-expressions: 0 */
/**
 * @description - Validation to signup user
 * @param {*} data
 * @param {*} state
 * @returns {object} - Error object
 */
const validation = (data, state) => {
  const error = { ...state };
  switch (data.type) {
  case 'email':
    !helpers.isEmailValid(data.content)
      ? error.email = true : delete (error.email);
    break;
  case 'password':
    !helpers.isPasswordValid(data.content)
      ? error.password = true : delete error.password;
    break;
  case 'firstName':
    !helpers.isNameValid(data.content)
      ? error.firstName = true : delete error.firstName;
    break;
  case 'lastName':
    !helpers.isNameValid(data.content)
      ? error.lastName = true : delete error.lastName;
    break;
  case 'userName':
    !helpers.isUsernameValid(data.content)
      ? error.userName = true : delete error.userName;
    break;
  default:
    return error;
  }
  return error;
};

export default validation;
