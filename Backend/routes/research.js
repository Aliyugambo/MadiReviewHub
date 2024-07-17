// routes/research.js
const express = require('express');
const { createResearch, getResearch,fetchResearchFindings } = require('../controllers/researchController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/',authMiddleware, createResearch);
router.get('/', authMiddleware,getResearch);
router.get('/findings', fetchResearchFindings);


module.exports = router;
