const ApiError = require('../models/exception');

module.exports = (req, res, next) => next(ApiError.notFound());
