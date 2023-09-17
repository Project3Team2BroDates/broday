const { AuthenticationError } = require('apollo-server-express');
const {Activity, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  Query: {
    users: async () => {
      return User.find().populate('activities');
    },
    user: async (parent, {userId}, context) => {
      if (context.user) {

            return User.findOne({ _id: userId}).populate('activities').populate('bros');
          }
          throw new AuthenticationError('You need to be logged in!');
    },
    activities: async () => {
      return Activity.find();
    },
    activity: async (parent, { activityId }) => {
      return Activity.findOne({ _id: Activity });
    },
    me: async (parent, args, context) => {
      // console.log(context)
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('activities').populate('bros');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
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
    addBro: async(parent,{name},context) =>{
      if(context.user){
        const bro = await User.findOne({name:name})
        const user1 = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { bros: bro._id } },
          {new:true}
        );
        await User.findOneAndUpdate(
          {_id: bro._id},
          { $addToSet: { bros: context.user._id} },
          )
        return user1;
      }else{throw new AuthenticationError('You need to be logged in!');}
    },
    addActivity: async (parent,  {activityText} , context) => {
      if (context.user) {
        // console.log(context.user);
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
    addExistingActivity: async (parent, {activityText} , context) =>{
        if(context.user){
          const activity = await Activity.findOne({activityText: activityText});
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { activities: activity._id } }
          );
          return activity;
        }
        throw new AuthenticationError('You need to be logged in!');
    },
    removeActivity: async (parent, { activityText }, context) => {
      if (context.user) {
        const activity = await Activity.findOne({
          activityText: activityText,
        });

        return await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: {activities: activity._id}},
          {new:true}
        );

        
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
  },
};

module.exports = resolvers;
