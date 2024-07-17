// routes/treatment.js
const express = require('express');
const { createTreatment, getTreatments } = require('../controllers/treatmentController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/',authMiddleware, createTreatment);
router.get('/', getTreatments);

module.exports = router;
