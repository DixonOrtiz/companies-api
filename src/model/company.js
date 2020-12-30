const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  address: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  phone: {
    type: String,
    required: true,
    max: 255,
    min: 8,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Company', companySchema);
