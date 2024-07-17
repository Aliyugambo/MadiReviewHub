// routes/auth.js
const express = require('express');
const { register, login, getUserProfile } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const validate = require('../middlewares/validate');
const { userSchema, loginSchema } = require('../validators/authValidator');
const router = express.Router();

router.post('/register',validate(userSchema), register);
router.post('/login', validate(loginSchema), login);
router.get('/profile', authMiddleware, getUserProfile);

module.exports = router;
 