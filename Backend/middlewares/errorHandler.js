// middlewares/errorHandler.js
const mongoose = require('mongoose');
const { ValidationError } = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err instanceof mongoose.Error.ValidationError) {
    const validationErrors = Object.values(err.errors).map(e => ({
      field: e.path,
      message: e.message,
    }));
    err = new ValidationError('Validation Error', validationErrors);
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const errors = err.errors || [];

  res.status(statusCode).json({
    message,
    errors,
  });
};

module.exports = errorHandler;
