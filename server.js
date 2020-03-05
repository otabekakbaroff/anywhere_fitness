const cors=require('cors');

const express = require('express');

const restrict=require('./middleware/restrict')

const  auth_router=require('./auth/auth-router');

const instructor = require('./users/instructor/instructor-router');

const client=require('./users/client/client-router');

const clazz=require('./users/class/class-router');

// const payment=require('./users/payment/payment-router');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/auth', auth_router);

server.use('/api/instructors', restrict, instructor);

server.use('/api/clients', restrict, client);

server.use('/api/classes', restrict, clazz);

// server.use('/api/payment', payment);


server.get('/', (req,res)=>{

    const test=[{Message:`*** SERVER IS UP AND RUNNING AT PORT 5000 ***`}]

    res.status(200).json(test);

})
server.get('/hello', (req,res)=>{

    const test=[{Message:`*** THIS GET WORKS :) ***`}]

    res.status(200).json(test);

})

module.exports = server;
