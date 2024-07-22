// routes/auth.js
const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validate');
const { userSchema, loginSchema } = require('../validators/authValidator');
const router = express.Router();

router.post('/register',validate(userSchema), registerUser);
router.post('/login', validate(loginSchema), loginUser);
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;
 