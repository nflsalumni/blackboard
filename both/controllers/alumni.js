AlumniController = AppController.extend({
  waitOn: function() {},
  data: {},
  onAfterAction: function() {
    Meta.setTitle('校友搜索');
  },
  template: 'alumniHome'
});

AlumniController.events({});
