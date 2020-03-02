const express = require('express');
const router = express.Router();
const clazz=require("./class-model");



//GET ALL classes
router.get('/', (req, res) => {
    clazz.find().then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});


//GET class BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    clazz.findById(id).then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});

//GET ALL CLIENTS FOR THE CLASS
router.get('/:id/clients',(req,res)=>{
    const { id } = req.params;
    clazz.findAllClients(id).then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Failure isn\'t an option, but this failed :('})
    })
})

router.post('/',(req,res)=>{
    const actionInfo=req.body
    clazz.add(actionInfo).then(clazs=>{
        res.status(201).json(clazs);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'OPPS :('})
    })
})

  
 //PUT (EDIT ACTION) 
router.put('/:id', (req, res) => {
    const actionInfo = req.body;
    const { id } = req.params;
    clazz.update(id,actionInfo).then(clazs=>{
        res.status(201).json(clazs);
    }).catch(err=>{
        res.status(500).json({errorMessage:'ERROR'})
    })
  });
  

//DELETE ACTION 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    clazz.remove(id).then(clazs=>{
        res.status(201).json(clazs);
    }).catch(err=>{
        res.status(500).json({errorMessage:'FAILED TO DELETE'})
    })
});


  
  module.exports = router;