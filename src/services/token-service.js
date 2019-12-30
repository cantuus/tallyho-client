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
  // todo: use this to decode the jwt auth token to get user id
  decodeToken() {
    // verify a token symmetric - synchronous
    // var decoded = jwt.verify(token, 'shhhhh');
    // console.log(decoded.foo) // bar
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