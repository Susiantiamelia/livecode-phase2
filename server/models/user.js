const mongoose = require('mongoose')
const Schema   = mongoose.Schema

let userSchema = new Schema({
  username: {
    type: String,
    required: [ true, 'Please input username' ]
  },
  password: {
    type: String,
    required: [true, 'Please input your password']
  }
}, {timestamps: true})


let User = mongoose.model('User', userSchema)

module.exports = User