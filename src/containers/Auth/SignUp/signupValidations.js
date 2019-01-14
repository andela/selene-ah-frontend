import helpers from '../../../helpers/validationHelpers/validations';

/* eslint no-unused-expressions: 0 */
const validation = (data, state) => {
  const error = { ...state };
  // console.log(error);
  switch (data.type) {
    case 'email':
      !helpers.isEmailValid(data.content)
        ? error.email = true : delete (error.email);
      break;
    case 'password':
      !helpers.isPasswordValid(data.content)
        ? error.password = true : delete error.password;
      break;
    case 'firstname':
      !helpers.isNameValid(data.content)
        ? error.firstname = true : delete error.firstname;
      break;
    case 'lastname':
      !helpers.isNameValid(data.content)
        ? error.lastname = true : delete error.lastname;
      break;
    case 'username':
      !helpers.isUsernameValid(data.content)
        ? error.username = true : delete error.username;
      break;
    default:
      return error;
  }
  return error;
};

export default validation;
