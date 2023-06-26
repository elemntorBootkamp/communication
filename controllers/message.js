import Message from '../models/message.js';

export const getAll = (req, res) => {
  /*
 #swagger.tags=['Message']
 */
  Message.find()
    .then((message) => { res.status(200).send({ message }); })
    .catch((error) => { res.status(404).send({ message: error.message }); });
};

export const addMessage = async (req, res) => {
  /*
 #swagger.tags=['Message']
 #swagger.parameters['message'] = {
           in: 'body',
                required: true,
            schema: { $ref: "#/definitions/AddMessage" }
        }
    */
  const message = await new Message(req.body);
  try {
    await message.save();
    res.status(200).send(message);
  } catch (err) {
    res.status(404).send(err);
  }
};
