const messageServ = require('../models/message')
const bcrypt = require('bcrypt')
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


module.exports = {
   returnTrue:()=>{
    return true;
   },
    /**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns all message
 */
   getAll: (req, res) => {
       messageServ.getAll().then((messages)=>{res.status(200).send({messages})})
       .catch((error)=> {res.status(404).send({message:error.message})})
       // User.find().populate({ path: 'articles', select: 'title description content' })
       //     .then((users) => { res.status(200).send({ users }) })
       //     .catch((error) => { res.status(404).send({ message: error.message }) })
   }
}