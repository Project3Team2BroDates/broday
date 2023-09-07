const { AuthenticationError } = require('apollo-server-express');
const {Activity, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('activities');
    },
    user: async (parent, { name }) => {
      return User.findOne({ name }).populate('activities');
    },
    activities: async (parent, { name }) => {
      const params = username ? { name } : {};
      return Activity.find(params);
    },
    activity: async (parent, { activityId }) => {
      return Activity.findOne({ _id: Activity });
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('activities');
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },

  Mutation: {
    addUser: async (parent, { name, email, password }) => {
      const user = await User.create({ name, email, password});
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addActivity: async (parent,  {activityText} , context) => {
      if (context.user) {
        const activity = await Activity.create({
          activityText,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { activities: activity._id } }
        );

        return activity;
      }else{throw new AuthenticationError('You need to be logged in!');}
      
    },
    removeActivity: async (parent, { activityId }, context) => {
      if (context.user) {
        const activity = await Activity.findOneAndDelete({
          _id: activityId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { activity: activity._id } }
        );

        return activity;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
