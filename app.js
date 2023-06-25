import express from 'express';
import bodyParser from 'body-parser';
// const dotenv = require('dotenv');
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import logger from './logger.js';
import messageRoutes from './routes/message.js';

// const messageRouter = require('./routs/message');
const swaggerFile = JSON.parse(readFileSync('./swagger_output.json'));
const app = express();

mongoose.set('strictQuery', true);

const port = 3000;

app.use(bodyParser.json());

// dotenv.config();

const connectionParams = {
  useNewUrlParser: true,
};

mongoose.connect('mongodb://localhost:27017/communication', connectionParams)
  .then(() => {
    logger.info('connect to mongoDB');
  })
  .catch((error) => {
    logger.info(`error: ${error}`);
  });

// router(app);
app.use(messageRoutes);

// app.use('/message', messageRouter);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
  logger.info(`my app is listening on http://localhost:${port}`);
});
export default app;
