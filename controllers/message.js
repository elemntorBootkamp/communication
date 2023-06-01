const Message = require('../models/message');

module.exports = {

  getAll: (req, res) => {
    Message.find()
      .then((message) => { res.status(200).send({ message }); })
      .catch((error) => { res.status(404).send({ message: error.message }); });
  },

  addMessage: async (req, res) => {
    const message = await new Message(req.body);
    try {
      await message.save();
      res.status(200).send(message);
    } catch (err) {
      res.status(404).send(err);
    }
  },
};
