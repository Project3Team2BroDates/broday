const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
    activityText: {
    type: String,
    required: true,
    trim: true,
  },
  activityPic:{
    type: String,
    default: "/images/hobby.png"
  }
});

const Activity = model('Activity',activitySchema)
module.exports = Activity;