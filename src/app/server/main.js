import { Meteor } from 'meteor/meteor';

Comments = new Mongo.Collection('comments');
Meteor.publish('comments',function () {

	this.added('comments','1',{comment: 'one'});
	this.added('comments','11',{comment: 'two'});
	this.added('comments','111',{comment: 'three'});
	this.ready();
	//return  Comments.find();
});


Meteor.publish('recentComments',function () {

	this.added('comments','1',{comment: 'one',login: 'rfrank'});
	 
	//return  Comments.find();
});

Meteor.startup(() => {
  // code to run on server at startup
});
