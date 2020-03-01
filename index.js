const express=require('express');

const server=express();

server.use(express.json());

server.get('/', (req,res)=>{
    const test=[{test:true, newTestRan:'yes'}]

    res.status(200).json(test);
})


const port=process.env.PORT || 5000;
server.listen(port,()=> console.log(`\n*** Running on port ${port}`))