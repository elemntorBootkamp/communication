const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  userId: {
    // type: mongoose.Schema.Types.ObjectId,
    type: Number,
    require: true,
  },
  title: {
    type: String,
    require: false,
  },
  content:
  {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Message', messageSchema);
