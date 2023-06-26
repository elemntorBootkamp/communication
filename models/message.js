import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  userId: {
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

export default mongoose.model('Message', messageSchema);
