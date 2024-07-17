// routes/review.js
const express = require('express');
const { createReview, getReviews } = require('../controllers/reviewController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createReview);
router.get('/', getReviews);

module.exports = router;
