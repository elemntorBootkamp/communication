import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import swaggerUi from 'swagger-ui-express';
import { readFileSync } from 'fs';
import logger from './logger.js';
import messageRoutes from './routes/message.js';

const swaggerFile = JSON.parse(readFileSync('./swagger_output.json'));
const app = express();

mongoose.set('strictQuery', true);

app.use(bodyParser.json());

dotenv.config();
const DB_CONNECTION=process.env.DB_CONNECTION;
const port = process.env.PORT;

const connectionParams = {
  useNewUrlParser: true,
};

mongoose.connect(DB_CONNECTION, connectionParams)
  .then(() => {
    logger.info('connect to mongoDB');
  })
  .catch((error) => {
    logger.info(`error: ${error}`);
  });

app.use(messageRoutes);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(port, () => {
  logger.info(`my app is listening on http://localhost:${port}`);
});
export default app;
