import config from '../config'
// import jwt

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
  },
  // todo: use this to retrieve jwt auth token from local storage
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  decodeToken(t) {
    let token = {}
    token.raw = t;
    token.payload = JSON.parse(window.atob(t.split('.')[1]));
    return (token)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(email, password) {
    return window.btoa(`${email}:${password}`)
  },
}

export default TokenService