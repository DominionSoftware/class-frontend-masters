import { Meteor } from 'meteor/meteor';
Comments = new Mongo.Collection('comments');
Meteor.publish('comments',function () {
	return  Comments.find();
});
Meteor.startup(() => {
  // code to run on server at startup
});
