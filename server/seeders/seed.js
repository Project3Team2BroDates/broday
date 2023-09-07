const db = require('../config/connection');
const { User, Activity } = require('../models');
db.once('open', async () => {
  try {
    await Activity.deleteMany({});
    const activities = await Activity.insertMany([
      { "activityText": "Football"},
      {"activityText": "Golf"},
      {"activityText": "Video Games"},
      {"activityText": "Soccer"},
      {"activityText": "Fishing"},
      {"activityText": "Baseball"},
      {"activityText": "Baseketball"},
      {"activityText": "Hunting"},
      {"activityText": "Hiking"},
      {"activityText": "Working Out"}
  ])
    console.log("Activites seeded!");
    await User.deleteMany({});
    await User.insertMany([
      {
        "name": "Peter",
        "email": "peter@gmail.com",
        "password": "password13",
        "activities": [activities[2]._id, activities[3]._id]
      },{
        "name": "Bob",
        "email": "bob@gmail.com",
        "password": "BOBpassword",
        "activities": [activities[0]._id, activities[4]._id]
      }

    ]);
    console.log("users seeded");

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
