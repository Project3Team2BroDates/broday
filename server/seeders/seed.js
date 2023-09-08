const db = require('../config/connection');
const { User, Activity } = require('../models');
db.once('open', async () => {
  try {
    await Activity.deleteMany({});
    const activities = await Activity.insertMany([
      { "activityText": "Football 🏈"},
      {"activityText": "Golf 🏌️"},
      {"activityText": "Video Games 🎮"},
      {"activityText": "Soccer ⚽"},
      {"activityText": "Fishing 🎣"},
      {"activityText": "Baseball ⚾"},
      {"activityText": "Baseketball 🏀"},
      {"activityText": "Hunting 🦌"},
      {"activityText": "Hiking 🏃‍♂️"},
      {"activityText": "Working Out 🏋🏽‍♀️"}
  ])
    console.log("Activites seeded!");
    

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
