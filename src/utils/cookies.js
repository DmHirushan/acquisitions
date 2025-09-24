export const cookies = {
  getOptions: () => ({sameSite: 'strict'}),

  set: (res, name, value, options = {}) => {
    res.cookie(name, value, { ...cookies.getOptions(), ...options});
  },

  clear: (res, name, options = {}) => {
    res.clearCookie(name, { ...cookies.getOptions(), ...options});
  },

  get: (res, name) => {
    return req.cookies[name];
  }
}
