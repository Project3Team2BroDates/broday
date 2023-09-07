const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
    activityText: {
    type: String,
    required: true,
    trim: true,
  },
   // add more props?   
});

const Activity = model('Activity',activitySchema)
module.exports = Activity;