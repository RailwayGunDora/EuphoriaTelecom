const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  simNumber: { type: String, required: true, unique: true },
  planType: { type: String, enum: ['Prepaid', 'Contract'], required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Subscriber', subscriberSchema);
