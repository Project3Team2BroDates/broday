const db = require("../config/connection");
const { User, Activity } = require("../models");
const bcrypt = require("bcrypt");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Activity.deleteMany({});

    const users = [
      {
        name: "Frank",
        email: "danny@seed.com",
        password: await bcrypt.hash("password1", 10),
        profilePic: "./images/devito.jpeg",
        activities: [],
      },
      {
        name: "Bob",
        email: "deniro@seed.com",
        password: await bcrypt.hash("password2", 10),
        profilePic: "./images/bob.jpeg",
        activities: [],
      },
      {
        name: "Mike",
        email: "mj@seed.com",
        password: await bcrypt.hash("password3", 10),
        profilePic: "./images/mike.jpeg",
        activities: [],
      },
      {
        name: "Timmy",
        email: "ttt@seed.com",
        password: await bcrypt.hash("password4", 10),
        profilePic: "./images/tim.jpeg",
        activities: [],
      },
      {
        name: "Justin Fields",
        email: "h1m@seed.com",
        password: await bcrypt.hash("password5", 10),
        profilePic: "./images/H1M.jpeg",
        activities: [],
      },
      {
        name: "Brad Pitt",
        email: "brad@seed.com",
        password: await bcrypt.hash("password6", 10),
        profilePic: "./images/brad.jpeg",
        activities: [],
      },
      {
        name: "Not Dracula",
        email: "notme@seed.com",
        password: await bcrypt.hash("password7", 10),
        profilePic: "./images/dracula.jpeg",
        activities: [],
      },
      {
        name: "John Daly",
        email: "daly@seed.com",
        password: await bcrypt.hash("password8", 10),
        profilePic: "./images/daly.jpeg",
        activities: [],
      },
      {
        name: "Coach Prime",
        email: "prime@seed.com",
        password: await bcrypt.hash("password9", 10),
        profilePic: "./images/prime.jpeg",
        activities: [],
      },
      {
        name: "Harry Potter",
        email: "harry@seed.com",
        password: await bcrypt.hash("password10", 10),
        profilePic: "./images/harry.jpeg",
        activities: [],
      },
      {
        name: "Malcom's Dad",
        email: "brian@seed.com",
        password: await bcrypt.hash("password11", 10),
        profilePic: "./images/brian.jpeg",
        activities: [],
      },
      {
        name: "Peyton",
        email: "peyton@seed.com",
        password: await bcrypt.hash("password12", 10),
        profilePic: "./images/peyton.jpeg",
        activities: [],
      },
      {
        name: "2time",
        email: "2time@seed.com",
        password: await bcrypt.hash("password13", 10),
        profilePic: "./images/2time.jpeg",
        activities: [],
      },
      {
        name: "Henry VIII",
        email: "henry@seed.com",
        password: await bcrypt.hash("password14", 10),
        profilePic: "./images/henry8.jpeg",
        activities: [],
      },
      {
        name: "Sir Elton",
        email: "elton@seed.com",
        password: await bcrypt.hash("password15", 10),
        profilePic: "./images/elton.jpeg",
        activities: [],
      },
    ];

    const createdUsers = await User.insertMany(users);

    const activities = [
      { activityText: "Football 🏈" },
      { activityText: "Golf 🏌️" },
      { activityText: "Video Games 🎮" },
      { activityText: "Soccer ⚽" },
      { activityText: "Fishing 🎣" },
      { activityText: "Baseball ⚾" },
      { activityText: "Basketball 🏀" },
      { activityText: "Hunting 🦌" },
      { activityText: "Hiking 🏃‍♂️" },
      { activityText: "Working Out 🏋🏽‍♀️" },
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
