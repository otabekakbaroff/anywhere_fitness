const express = require('express');
const router = express.Router();
const Instructor=require("./instructor-model");





//GET ALL instructors
router.get('/', (req, res) => {
    Instructor.find().then(user=>{
        res.status(200).json(user);
    }).catch(err=>{
        console.log(err);
        console.log(process.env.DATABASE_URL)
        res.status(500).json({errorMessage:'Can\'t get instructors Because there\'s something wrong with DATABASE'})
    })
});


//GET USER BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Instructor.findById(id).then(user=>{
        res.status(200).json(user);
    }).catch(err=>{
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});

//GET USER BY ID
router.get('/:id/classes', (req, res) => {
    const { id } = req.params;
    Instructor.InstructorCreatedClasses(id).then(user=>{
        res.status(200).json(user);
    }).catch(err=>{
        res.status(500).json({errorMessage:'Something Went Wrong'})
    })
});


  
 //PUT (EDIT ACTION) 
router.put('/:id', (req, res) => {
    const actionInfo = req.body;
    const { id } = req.params;
    Instructor.update(id,actionInfo).then(user=>{
        res.status(201).json(user);
    }).catch(err=>{
        res.status(500).json({errorMessage:'ERROR'})
    })
  });
  

//DELETE ACTION 
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Instructor.remove(id).then(user=>{
        res.status(201).json(user);
    }).catch(err=>{
        res.status(500).json({errorMessage:'FAILED TO DELETE'})
    })
});


  
  module.exports = router;