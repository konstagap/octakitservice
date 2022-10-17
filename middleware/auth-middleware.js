const TokenService = require('../service/token-service');

module.exports = function (req, res, next) {
  try {
    // const accessToken = TokenService.getAccessToken(req.headers);
    // req.accessToken = accessToken;

    // Uncomment top part for validations, and delete line 13, it checks for Bearer token in auth header, not validating it.
    req.accessToken = process.env.GH_TOKEN;
    next();
  } catch (e) {
    next(e);
  }
};
