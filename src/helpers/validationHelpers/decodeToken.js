import jwtDecode from 'jwt-decode';

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
