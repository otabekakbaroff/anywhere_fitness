const router = require('express').Router();
const Instructor=require('./auth-model');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');



function generateToken(user){
    
    const payload={
        username:user.username,
    }

    const secret="keep this a secret"

    const options = {
        expiresIn:'8h'
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
            firstname:usersInfo.firstname,
            lastname:usersInfo.lastname,
            status:usersInfo.status,
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
          if (user && bcrypt.compareSync(password,user.password)){
          const token=generateToken(user);
          res.status(200).json({
              id:user.id,
              Welcome: user.firstname,
              lastname: user.lastname,
              contactInfo:user.contactInfo,
              status:user.status,
              token,
          });
        }
        else{
            res.status(401).json({errorMessage: 'Invalid Credentials'})
        }
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
        res.status(201).json({ 
            firstname:usersInfo.firstname,
            lastname:usersInfo.lastname,
            token
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({errorMessage:'Post Failed'})
    })
});
  
  
  
router.post("/client/login", (req, res) => {
    const { username, password } = req.body;
    Instructor.findClientBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password,user.password)){
        const token=generateToken(user);
          res.status(200).json({
              id:user.id,
              Welcome: user.firstname,
              lastname:user.lastname,
              contactInfo:user.contactInfo,
              token,
          });
        }
        else{
            res.status(401).json({errorMessage: 'Invalid Credentials'})
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({errorMessage:'Invalid Credentials'});
      });
});


module.exports = router;