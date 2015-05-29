Rooms = new Mongo.Collection('rooms');

Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/rooms/:room', function () {
  var room = this.params.room;

  this.render('Room', {
    data: function () {
      return Rooms.findOne({name: room});
    }
  });
});

if (Meteor.isClient) {
  Tracker.autorun(function () {
    l = Iron.Location.get();
    console.log(l);
  });
}

if (Meteor.isServer) {
  if (Rooms.find().count() === 0) {
    Rooms.insert({name: 'main'});
    Rooms.insert({name: 'development'});
  }
}
