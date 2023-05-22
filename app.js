const express = require('express')
const bodyPasrer = require('body-parser')
//const dotenv = require('dotenv')
const userRouter=require('./routs')
const app = express()
const mongoose = require('mongoose')


const port = 3000;

app.use(bodyPasrer.json())
//dotenv.config()

app.use((req, res, next) => {
    //origin, headers, methods
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        res.status(200).send()
    }
    next()
})
const connectionParams = {
    useNewUrlParser: true,
}

// mongoose.connect(process.env.DB_CONNECTION, connectionParams)
//     .then(() => {
//         console.log('connect to mongoDB');
//     })
//     .catch((error) => {
//         console.log(`error: ${error}`);
//     })

app.use('/user', userRouter)

app.listen(port, () => {
    console.log(`my app is listening on http://localhost:${port}`);
})