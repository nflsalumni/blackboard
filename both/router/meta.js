Meteor.startup(function() {
  if(Meteor.isClient) {
    Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        suffix: '南外校友黑板报',
        title: "南外校友黑板报",
        namespace: "blackboard"
      }
    });
  }
});
