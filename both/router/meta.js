Meteor.startup(function() {
  if(Meteor.isClient) {
    Meta.config({
      options: {
        // Meteor.settings[Meteor.settings.environment].public.meta.title
        suffix: '南京外国语学校校友会黑板报',
        title: "南京外国语学校校友会黑板报",
        namespace: "blackboard"
      }
    });
  }
});
