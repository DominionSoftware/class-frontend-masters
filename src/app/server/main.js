import { Meteor } from 'meteor/meteor';
Comments = new Mongo.Collection('comments');
Meteor.startup(() => {
  // code to run on server at startup
});
