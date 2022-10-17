module.exports = class ApiError extends Error {
  constructor(status, message, errors) {
    super(message);
    this.status = status;
    if (errors) this.errors = errors;
  }

  static notFound() {
    return new ApiError(404, "Sorry, can't find that");
  }

  static unauthorized() {
    return new ApiError(401, 'User is not authorized');
  }

  static badRequest(message, errors = []) {
    return new ApiError(400, message, errors);
  }
};
