const express = require('express');
const router = express.Router();
const client=require("./client-model");

//GET ALL clients
router.get('/', (req, res) => {
    client.find().then(user=>{
        res.status(200).json(user);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});


//GET USER BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    client.findById(id).then(user=>{
        res.status(200).json(user);
    }).catch(err=>{
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});

  
 //PUT (EDIT ACTION) 
router.put('/:id', (req, res) => {
    const actionInfo = req.body;
    const { id } = req.params;
    client.update(id,actionInfo).then(user=>{
        res.status(201).json(user);
    }).catch(err=>{
        res.status(500).json({errorMessage:'ERROR'})
    })
});
  

//DELETE ACTION 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    client.remove(id).then(user=>{
        res.status(201).json(user);
    }).catch(err=>{
        res.status(500).json({errorMessage:'FAILED TO DELETE'})
    })
});


  
  module.exports = router;