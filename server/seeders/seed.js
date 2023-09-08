const db = require("../config/connection");
const { User, Activity } = require("../models");
const bcrypt = require("bcrypt");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Activity.deleteMany({});

    const users = [
      {
        name: "User1",
        email: "user1@example.com",
        password: await bcrypt.hash("password1", 10),
        activities: [],
      },
      {
        name: "User2",
        email: "user2@example.com",
        password: await bcrypt.hash("password2", 10),
        activities: [],
      },
      {
        name: "User3",
        email: "user3@example.com",
        password: await bcrypt.hash("password3", 10),
        activities: [],
      },
      {
        name: "User4",
        email: "user4@example.com",
        password: await bcrypt.hash("password4", 10),
        activities: [],
      },
      {
        name: "User5",
        email: "user5@example.com",
        password: await bcrypt.hash("password5", 10),
        activities: [],
      },
      {
        name: "User6",
        email: "user6@example.com",
        password: await bcrypt.hash("password6", 10),
        activities: [],
      },
      {
        name: "User7",
        email: "user7@example.com",
        password: await bcrypt.hash("password7", 10),
        activities: [],
      },
      {
        name: "User8",
        email: "user8@example.com",
        password: await bcrypt.hash("password8", 10),
        activities: [],
      },
      {
        name: "User9",
        email: "user9@example.com",
        password: await bcrypt.hash("password9", 10),
        activities: [],
      },
      {
        name: "User10",
        email: "user10@example.com",
        password: await bcrypt.hash("password10", 10),
        activities: [],
      },
      {
        name: "User11",
        email: "user11@example.com",
        password: await bcrypt.hash("password11", 10),
        activities: [],
      },
      {
        name: "User12",
        email: "user12@example.com",
        password: await bcrypt.hash("password12", 10),
        activities: [],
      },
      {
        name: "User13",
        email: "user13@example.com",
        password: await bcrypt.hash("password13", 10),
        activities: [],
      },
      {
        name: "User14",
        email: "user14@example.com",
        password: await bcrypt.hash("password14", 10),
        activities: [],
      },
      {
        name: "User15",
        email: "user15@example.com",
        password: await bcrypt.hash("password15", 10),
        activities: [],
      },
    ];

    const createdUsers = await User.insertMany(users);

    const activities = [
      { activityText: "Football" },
      { activityText: "Golf" },
      { activityText: "Video Games" },
      { activityText: "Soccer" },
      { activityText: "Fishing" },
      { activityText: "Baseball" },
      { activityText: "Basketball" },
      { activityText: "Hunting" },
      { activityText: "Hiking" },
      { activityText: "Working Out" },
    ];

    await Activity.insertMany(activities);

    console.log("Activities seeded!");
    console.log("Users seeded!");

    console.log("All done!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
