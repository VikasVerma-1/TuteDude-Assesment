const FriendRequest = require('../models/FriendRequest');
const User = require('../models/User');

// Send friend request
exports.sendRequest = async (req, res) => {
  try {
    const { receiverId } = req.body;
    const request = new FriendRequest({ sender: req.user.id, receiver: receiverId });
    await request.save();
    res.json({ message: 'Friend request sent' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Respond to friend request
exports.respondToRequest = async (req, res) => {
  try {
    const { requestId, action } = req.body;
    const request = await FriendRequest.findById(requestId);

    if (!request) return res.status(404).json({ message: 'Friend request not found' });
    if (request.receiver.toString() !== req.user.id)
      return res.status(403).json({ message: 'Unauthorized' });

    if (action === 'accept') {
      const sender = await User.findById(request.sender);
      const receiver = await User.findById(req.user.id);

      sender.friends.push(receiver._id);
      receiver.friends.push(sender._id);

      await sender.save();
      await receiver.save();
      await request.remove();
      return res.json({ message: 'Friend request accepted' });
    } else if (action === 'reject') {
      await request.remove();
      return res.json({ message: 'Friend request rejected' });
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
