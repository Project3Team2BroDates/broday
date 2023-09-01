const { Schema, model } = require('mongoose');

const hobbySchema = new Schema({
    name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
   // add more props?   
});

const Hobby = model('Hobby',hobbySchema)
module.exports = Hobby;