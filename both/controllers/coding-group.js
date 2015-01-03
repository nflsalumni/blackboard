CodingGroupController = AppController.extend({
  waitOn: function() {
  },
  data: {
  },
  onAfterAction: function () {
    Meta.setTitle('建站学习小组专页');
  },
  template: 'codingGroupHome'
});

CodingGroupController.events({
});
