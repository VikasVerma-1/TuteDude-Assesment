const express = require('express');
const { getUserProfile, getAllUsers, getFriends } = require('../controllers/userController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/profile', authenticate, getUserProfile);
router.get('/', authenticate, getAllUsers);
router.get('/friends', authenticate, getFriends);

module.exports = router;
