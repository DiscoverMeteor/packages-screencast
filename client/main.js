Meteor.subscribe('rooms');
Deps.autorun(function() {
  Meteor.subscribe('presencesInRoom', Session.get('currentRoomId'));
});

Meteor.Presence.state = function() {
  return {roomId: Session.get('currentRoomId')};
}

Template.body.rooms = function() {
  return Rooms.find();
}

Template.body.currentRoom = function() {
  return Rooms.findOne(Session.get('currentRoomId'));
}

Template.body.presences = function() {
  return Meteor.presences.find({'state.roomId': this._id});
}

Template.body.email = function() {
  var user = Meteor.users.findOne(this.userId);
  if (! user)
    return 'No email';
  
  return user.emails[0].address;
}

Template.body.events({
  'click .room': function() {
    Session.set('currentRoomId', this._id);
  }
})

