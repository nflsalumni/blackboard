AppController = RouteController.extend({
  layoutTemplate: 'appLayout',
  onBeforeAction: function(pause) {
    if (this.url !== '/') {
      AccountsTemplates.ensureSignedIn.call(this, pause);
    } else {
      this.next();
    }
  }
});
