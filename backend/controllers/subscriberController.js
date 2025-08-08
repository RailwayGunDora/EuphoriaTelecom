const Subscriber = require('../models/Subscriber');

exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addSubscriber = async (req, res) => {
  const { name, phoneNumber, simNumber, planType } = req.body;
  try {
    const newSubscriber = await Subscriber.create({ name, phoneNumber, simNumber, planType });
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSubscriber = async (req, res) => {
  try {
    const updated = await Subscriber.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSubscriber = async (req, res) => {
  try {
    await Subscriber.findByIdAndDelete(req.params.id);
    res.json({ message: 'Subscriber deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
