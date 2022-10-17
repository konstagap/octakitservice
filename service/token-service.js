class TokenService {
  static validateAccessToken(accessToken) {}

  static getAccessToken(headers) {
    // I have not found how twe can validate token before making call, so we consider route protected if token is header)))
    const authorizationHeader = headers.authorization;
    if (!authorizationHeader) throw ApiError.unauthorized();
    const accessToken = authorizationHeader.split(' ')[1];
    if (!accessToken) throw ApiError.unauthorized();
    return accessToken;
  }
}

module.exports = TokenService;
