const mongoose = require('mongoose')
const Schema   = mongoose.Schema

let itemSchema = new Schema({
  name: {
    type: String,
    required: [true, 'please input item name']
  },
  price: {
    type: Number,
    required: [true, 'please input item price']
  },
  stock: {
    type: Number,
    required: [true, 'please input item stock']
  },
  tags: [],
  user: {type: Schema.Types.ObjectId}
}, {timestamps: true})


let Item =mongoose.model('Item', itemSchema)

module.exports = Item