const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const key = process.env.SECRET_KEY;

class Users{
  static register(req,res){
    let salt = bcrypt.genSaltSync(8);
    let password = bcrypt.hashSync(req.body.password, salt);
    
    User.create({
      username: req.body.username,
      password: password
    })
    .then(result => {
      res.status(201).set({
        "Content-Type": "application/json",
        "Location": "/register"
      }).send({
        "success": true,
        "message": `Account ${result.username} registered`
      })
      
    })
    .catch(err => {
      console.log(err);
        
    })
  }

  static request_token(req,res){
    User.find({username: req.body.username})
    .then(result => {
      if(result.length!== 0){
        let password = bcrypt.compareSync(req.body.password, result[0].password);
        if(password){

          let token = jwt.sign({id: result[0]._id, username: result[0].username, password: result[0].password}, key)
          
          res.status(201).set({
            "Content-Type":"application/json",
            "Location":"/request_token"
          }).send({
            "token": token,
          })
        }
      }
    })
    .catch(err => {
      console.log(err);
        
    })
  }
}

module.exports = Users
