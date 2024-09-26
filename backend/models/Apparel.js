const mongoose = require('mongoose');

const apparelSchema = new mongoose.Schema({
  type: { type: String, required: true },
  condition: { type: String, required: true },
  disposal_method: { type: String, required: true },
  submission_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Apparel', apparelSchema);
