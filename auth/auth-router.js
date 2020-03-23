const router = require('express').Router();
const Instructor=require('./auth-model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');



function generateToken(user){
    
    const payload={
        username:user.username,
    }

    const secret='is it secret, is it safe?'

    const options = {
        expiresIn:'5h'
    }

    return jwt.sign(payload, secret, options);
}

/////////////////////INSTRUCTOR////////////////////
router.post('/instructor/register', (req, res) => {
    const usersInfo = req.body;
    const hash=bcrypt.hashSync(usersInfo.password, 8);
    usersInfo.password=hash;
    Instructor.addInstructor(usersInfo).then(user=>{
        const token=generateToken(user);
        res.status(201).json({
            user,
            token
        });
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
          const token=generateToken(user);
          res.status(200).json({
              id:user.id,
              Welcome: user.firstname,
              lastname: user.lastname,
              contactInfo:user.contactInfo,
              status:user.status,
              token,
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
    const hash=bcrypt.hashSync(usersInfo.password, 8);
    usersInfo.password=hash;
    Instructor.addClient(usersInfo).then(user=>{
        const token=generateToken(user);
        res.status(201).json({user,token});
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
        const token=generateToken(user);
          res.status(200).json({
              id:user.id,
              Welcome: user.firstname,
              lastname:user.lastname,
              contactInfo:user.contactInfo,
              token,
          });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage:'Invalid Credentials'});
      });
});


module.exports = router;