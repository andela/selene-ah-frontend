import jwtDecode from 'jwt-decode';

const decodeToken = () => {
  const token = localStorage.getItem('token');
  try {
    return jwtDecode(token).user;
  } catch (err) {
    return null;
  }
};

export default decodeToken;
