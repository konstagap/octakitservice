const ApiError = require('../models/exception');

module.exports = function (err, req, res, next) {
  console.log('Error in error-middleware', err);
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors });
  }
  return res.status(500).json({ message: 'Unknown Error' });
};
