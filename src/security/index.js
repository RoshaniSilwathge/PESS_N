import JwtDecode from 'jwt-decode';

export const decodeAccessToken = () => {
  const decodedToken = JwtDecode(localStorage.getItem('accessToken'));
  const [id,username,userRole] =  decodedToken.sub.split('--');
  return {id, username, userRole};
};
