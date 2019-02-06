import jwtDecode from 'jwt-decode';

/**
 * @description - get user from a token
 * @returns {object} - return user details
 */
const decodeToken = () => {
  const token = localStorage.getItem('token');
  const currentTime = (new Date().getTime()) / 1000;
  try {
    const tokenInfo = jwtDecode(token);
    if (tokenInfo.exp < currentTime) {
      return null;
    }
    return tokenInfo.user;
  } catch (err) {
    return null;
  }
};

export default decodeToken;
