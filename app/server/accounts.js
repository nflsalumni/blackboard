Meteor.startup(function() {
  return AccountsEntry.config({
    signupCode: null
  });
});
