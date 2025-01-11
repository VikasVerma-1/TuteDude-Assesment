const express = require('express');
const { sendRequest, respondToRequest } = require('../controllers/friendController');
const { authenticate } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/requests/send', authenticate, sendRequest);
router.post('/requests/respond', authenticate, respondToRequest);

module.exports = router;
