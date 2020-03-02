const express = require('express');

const  auth_router=require('./auth/auth-router');

const instructor = require('./users/instructor/instructor-router');

// const Instructor=require('./users/instructor/instructor-router');

// const client=require('./users/client/client-router');

// const clazz=require('./users/class/class-router');

// const payment=require('./users/payment/payment-router');

const server = express();

server.use(express.json());


server.use('/api', auth_router);

server.use('/api/instructor', instructor);

// server.use('/api/client', client);

// server.use('/api/class', clazz);

// server.use('/api/payment', payment);


server.get('/', (req,res)=>{

    const test=[{Message:`*** SERVER IS UP AND RUNNING AT PORT 5000 ***`}]

    res.status(200).json(test);

})

module.exports = server;
