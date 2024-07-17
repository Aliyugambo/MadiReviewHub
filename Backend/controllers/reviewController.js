// controllers/reviewController.js
const Review = require('../models/Review');
const { NotFoundError, ValidationError } = require('../utils/errors');
exports.createReview = async (req, res, next) => {
  const { hospital, treatment, content, rating } = req.body;
  try {
    const review = new Review({ user: req.user.id, hospital, treatment, content, rating });
    await review.save();
    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    next(error);
  }
};

exports.getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find().populate('user', 'name');
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};
