const { AuthenticationError } = require('apollo-server-express');
const {Hobby, Profile } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    profiles: async () => {
      return Profile.find().populate('hobbies');
    },
    profile: async (parent, { username }) => {
      return Profile.findOne({ username }).populate('hobbies');
    },
    hobbies: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Hobby.find(params);
    },
    hobby: async (parent, { hobbyId }) => {
      return Hobby.findOne({ _id: hobbyId });
    },
    // me: async (parent, args, context) => {
    //   if (context.user) {
    //     return User.findOne({ _id: context.user._id }).populate('hobbies');
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
  },

  Mutation: {
    addProfile: async (parent, { username, email, password }) => {
      const profile = await Profile.create({ username, email, password });
      const token = signToken(profile);
      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const profile = await Profile.findOne({ email });

      if (!profile) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await profile.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(profile);

      return { token, profile };
    },
    addHobby: async (parent, { name }, context) => {
      if (context.user) {
        const hobby = await Hobby.create({
          name,
        });

        await Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { hobbies: hobby._id } }
        );

        return hobby;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeHobby: async (parent, { hobbyId }, context) => {
      if (context.user) {
        const hobby = await Hobby.findOneAndDelete({
          _id: hobbyId,
        });

        await Profile.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { hobby: hobby._id } }
        );

        return hobby;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
