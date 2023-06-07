
const express = require('express');
const logger = require('./logger');
const mongoose = require('mongoose');
const bodyPasrer = require('body-parser');
const messageRouter = require('./routs/message');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

const app = express();
const port = 2000;

app.use(bodyPasrer.json());

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.connect('mongodb://localhost/communication', connectionParams)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

app.use('/message', messageRouter);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(port, () => {
  logger.log('info', 'Application started');
  console.log(`my app is listening on http://localhost:${port}`);
});
