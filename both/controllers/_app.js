AppController = RouteController.extend({
  layoutTemplate: 'appLayout',
  onBeforeAction: function(pause) {
    if (this.url === '/' ||
      this.url === '/coding-group/' ||
      this.url === '/coding-group' ||
      this.url === '/archive' ||
      this.url === '/archive/'||
      this.url === '/signUp' ||
      this.url === '/signIn') {
      this.next();
    } else {
      if (Meteor.user() === null) {
        Router.go('signIn');
      }
      this.next();
    }
  }
});
