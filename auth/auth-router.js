const router = require('express').Router();
const Instructor=require('./auth-model');


/////////////////////INSTRUCTOR////////////////////
router.post('/instuctor/register', (req, res) => {
    const usersInfo = req.body;
    Instructor.addInstructor(usersInfo).then(user=>{
        res.status(201).json(user);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Post Failed'})
    })
});
  
  
  
router.post("/instructor/login", (req, res) => {
    let { username, password } = req.body;
    Instructor.findInstructorBy({ username })
      .first()
      .then(user => {
          console.log(user);
          res.status(200).json({
              Welcome: user.name,
              contactInfo:user.contactInfo,
              status:user.status
          });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage:'Invalid Credentials'});
      });
});

///////////////////////CLIENT//////////////////////////////
router.post('/client/register', (req, res) => {
    const usersInfo = req.body;
    Instructor.addClient(usersInfo).then(user=>{
        res.status(201).json(user);
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Post Failed'})
    })
});
  
  
  
router.post("/client/login", (req, res) => {
    let { username, password } = req.body;
    Instructor.findClientBy({ username })
      .first()
      .then(user => {
          console.log(user);
          res.status(200).json({
              Welcome: user.name,
              contactInfo:user.contactInfo,
              status:user.status
          });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage:'Invalid Credentials'});
      });
});


module.exports = router;