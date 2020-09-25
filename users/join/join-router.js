const join=require("./join-model")
const express = require('express');
const router = express.Router();


//GET ALL classes
router.get('/', (req, res) => {
    join.find().then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});


//GET ALL CLASSES FOR A CLIENT
router.get('/:id/classes', (req, res) => {
    const { id } = req.params;
    join.classesForClients(id).then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});

//GET ALL CLIENTS IN A CLASS
router.get('/:id/clients', (req, res) => {
    const { id } = req.params;
    join.clientsInClasses(id).then(clazs=>{
        res.status(200).json(clazs);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});



router.post('/',(req,res)=>{
    const actionInfo=req.body
    join.add(actionInfo).then(clazs=>{
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
    join.update(id,actionInfo).then(clazs=>{
        res.status(201).json(clazs);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({errorMessage:'ERROR'})
    })
  });
  

//DELETE ACTION 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    join.remove(id).then(clazs=>{
        res.status(201).json(clazs);
    }).catch(err=>{
        console.log(err)
        res.status(500).json({errorMessage:'FAILED TO DELETE'})
    })
});


  
  module.exports = router;