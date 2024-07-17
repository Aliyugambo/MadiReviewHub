// utils/errors.js
class ApiError extends Error {
    constructor(message, statusCode, errors = []) {
      super(message);
      this.statusCode = statusCode;
      this.errors = errors;
    }
  }
  
  class NotFoundError extends ApiError {
    constructor(message = 'Not Found') {
      super(message, 404);
    }
  }
  
  class ValidationError extends ApiError {
    constructor(message = 'Validation Error', errors = []) {
      super(message, 400, errors);
    }
  }
  class AuthenticationError extends ApiError {
    constructor(message = 'Authentication Failed') {
      super(message, 401);
    }
  }
  module.exports = {
    ApiError,
    NotFoundError,
    ValidationError,
    AuthenticationError,
  };
  