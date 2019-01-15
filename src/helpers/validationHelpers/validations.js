/* eslint-disable max-len */
/**
 * @class
 */
class Validation {
/**
 * @description checks if an email syntax is right or wrong
 * @param {String} email
 * @returns {Boolean} Boolean
 */
  static isEmailValid(email) {
    const emailRegex = /^([a-z_.!@#$%^&*0-9]{3,25})@([a-z]{3,20})\.([a-z]){2,7}(\.[a-z]{2,5})?$/i;
    return emailRegex.test(email);
  }

  /**
 * @description checks if a password syntax is right
 * @param {String} password to be tested
 * @returns {Boolean} returns true or false
 */
  static isPasswordValid(password) {
    const passwordRegex = /^(?=.*[0-9])([a-zA-Z0-9!@#$.%^&*~`?><,.';"|}{}+-=)()|]{8,20})$/;
    return passwordRegex.test(password);
  }

  /**
 * @description checks if a name syntax is right
 * @param {String} name to be tested
 * @return {Boolean} returns true or false
 */
  static isNameValid(name) {
    const nameRegex = /^([a-zA-Z]){3,20}$/;
    return nameRegex.test(name);
  }

  /**
 * @description checks if a username syntax is right
 * @param {String} name to be tested
 * @return {Boolean} returns true or false
 */
  static isUsernameValid(name) {
    const usernameRegex = /^([a-zA-Z0-9!@#$%^_&.*]){3,20}$/;
    return usernameRegex.test(name);
  }

  /**
   * @description - checks if password is equal to confirm password
   * @param {string} password
   * @param {string} confirmPassword
   * @returns {boolean} - Return true or false
   */
  static verifyConfirmPassword(password, confirmPassword) {
    return confirmPassword === password;
  }
}

export default Validation;
