const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Item = require('../models/item')
const key = process.env.SECRET_KEY;

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

class Items{
  static items(req,res){
    let auth_headers = req.headers.authorization || false
    console.log(auth_headers);
    
    if(auth_headers){
      let auth = auth_headers.split(" ")
      let user = jwt.verify(auth[1], key)

      let input = req.body
      input.user = user.id
      
      Item.create(input)
      .then(result => {
        
        res.status(201).set({
          "Content-Type": "application/json",
          "Location": "/items"
        }).send({
            "_id": result._id,
            "name": result.name,
            "price": result.price,
            "stock": result.stock,
            "tags": result.tags,
            "user":result.user
        })
      })
      .catch(err => {

      })
    } else {
      res.status(400).set({
        "Content-Type": "application/json",
      }).send({
        "error": "You are not authorized to access this API"
      })
    }
    
  }

  static list_all(req,res){
    if(isEmpty(req.query)){
      Item.find({})
      .then(result => {
        console.log(result);
        res.status(200).set({
          "Content-Type": "application/json",
        }).send(result)
        
      })
      .catch(err => {

      })
    }
    
  }
}

module.exports = Items