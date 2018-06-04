import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Comments = new Mongo.Collection('comments');

Template.CommentList.helpers({
comments: function(){
		return Comments.find();
	}

});

Template.CommentAdd.events(
{

	'submit form': function(e,tmpl){
		e.preventDefault();
		var formEl = tmpl.find('form');
		var commentEl = tmpl.find('[name=comment]');
		var comment = commentEl.value;

		Comments.insert({
			login: 'rfrank@dominionsw.com',
			timestamp: new Date,
			room: 'main',
			comment: comment
		});

		formEl.reset();
	}

});
