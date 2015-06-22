DashboardController = AppController.extend({
  waitOn: function() {
  },
  data: {
  },
  onAfterAction: function () {
    Meta.setTitle('我的面板');
  }
});

DashboardController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
