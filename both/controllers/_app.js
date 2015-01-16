AppController = RouteController.extend({
  layoutTemplate: 'appLayout',
  onBeforeAction: function(pause) {
    if (this.url === '/' ||
        this.url === '/coding-group/' ||
        this.url === '/coding-group' ) {
      this.next();
    } else {
      AccountsTemplates.ensureSignedIn.call(this, pause);
    }
  }
});
