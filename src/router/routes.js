const getRouteGroup = (prefix, routes) => {
  return Object.values(routes).map(route => `${prefix}/${route}`);
};


const ROUTES = {
  index: '/',
  auth: getRouteGroup('/auth', {
    signUp: 'sign-up',
    login: 'login',
  }),
  entries: getRouteGroup('/entries', {
    index: '',
  })
};

export default ROUTES;
