const cors=require('cors');

const helmet=require('helmet');

const express = require('express');

// const restrict=require('./middleware/restrict')

const  auth_router=require('./auth/auth-router');

const instructor = require('./users/instructor/instructor-router');

const client=require('./users/client/client-router');

const clazz=require('./users/class/class-router');

const join=require('./users/join/join-router');

const payment=require('./users/payment/payment-router');

const server = express();

server.use(express.json());

server.use(helmet());

server.use(cors());

server.use('/api/auth', auth_router);

server.use('/api/instructors', /*restrict,*/ instructor);

server.use('/api/clients',  /*restrict, */ client);

server.use('/api/classes',  /*restrict,*/ clazz);

server.use('/api/access', /*restrict*/ join);

// server.use('/api/payment', payment);


server.get('/', (req,res)=>{

    const test=[{Message:`*** SERVER IS UP AND RUNNING AT PORT 5000 ***`}]

    res.status(200).json(test);

})
server.get('/admin', (req,res)=>{

    const test=[{Message:`*** Restricted Page, Admins Only ***`}]
    res.status(200).json(test);

})

module.exports = server;





