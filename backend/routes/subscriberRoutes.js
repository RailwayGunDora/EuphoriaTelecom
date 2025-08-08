const express = require('express');
const { getSubscribers, addSubscriber, updateSubscriber, deleteSubscriber } = require('../controllers/subscriberController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getSubscribers);
router.post('/', protect, addSubscriber);
router.put('/:id', protect, updateSubscriber);
router.delete('/:id', protect, deleteSubscriber);

module.exports = router;
