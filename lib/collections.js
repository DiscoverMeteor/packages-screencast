Rooms = new Meteor.Collection('rooms');

if (Meteor.isServer && Rooms.find().count() === 0) {
  Rooms.insert({name: 'Meteor Talk'});
  Rooms.insert({name: 'Meteor Core'});
  Rooms.insert({name: 'Javascript Programming'});
}