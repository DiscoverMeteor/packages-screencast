Meteor.methods({
  log: function() {
    logger.info("logging on the server" + this.userId);
  }
});