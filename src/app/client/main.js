import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Comments = new Mongo.Collection('comments');

Meteor.subscribe('comments');
Meteor.subscribe('recentComments');
 

Template.CommentList.helpers({
comments: function(){
		return Comments.find();
	},

formatTimestamp:function(timestamp){
	var m = moment(timestamp);
	return m.calendar();
}
});

Template.CommentAdd.events(
{

	'submit form': function(e,tmpl){
		e.preventDefault();
		var formEl = tmpl.find('form');
		var commentEl = tmpl.find('[name=comment]');
		var comment = commentEl.value;
		debugger;
		Comments.insert({
			login: 'rfrank@dominionsw.com',
			timestamp: new Date,
			room: 'main',
			comment: comment
		});

		formEl.reset();
	}

});
