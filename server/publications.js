Meteor.publish('rooms', function() {
  return Rooms.find();
});

Meteor.publish('presencesInRoom', function(roomId) {
  Meteor.publishWithRelations({
    handle: this,
    
    collection: Meteor.presences,
    filter: {'state.roomId': roomId},
    
    mappings: [{
      collection: Meteor.users,
      key: 'userId'
    }]
  });
})
