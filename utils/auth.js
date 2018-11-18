const TOKEN = 'token';

export const setAuth = ({token, expiry}) => {
  localStorage.setItem(TOKEN, token);
};

export const getAuth = () => {
  return localStorage.getItem(TOKEN);
};
