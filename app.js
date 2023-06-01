
const express = require('express');
const bodyPasrer = require('body-parser');

// const dotenv = require('dotenv');
const mongoose = require('mongoose');

const messageRouter = require('./routs/message');

const app = express();

mongoose.set('strictQuery', true);




const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

const port =3000 ;

app.use(bodyPasrer.json());

// dotenv.config();

const connectionParams = {
  useNewUrlParser: true,
};


mongoose.connect('mongodb://localhost:27017/communication', connectionParams)
  .then(() => {
    console.log('connect to mongoDB');
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });

app.use('/message', messageRouter);



app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(port, () => {
  console.log(`my app is listening on http://localhost:${port}`);
});
