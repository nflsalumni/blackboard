Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('dashboard', {
    path: '/dashboard',
    data: function () {
      return Meteor.users();
    }
  });


  this.route('alumni', {
    path: '/alumni',
    waitOn: function() { return Meteor.subscribe('users'); },
    data: function() { return Meteor.users.find(); }
  });

  return this.route('notFound', {
    path: '*',
    where: 'server',
    action: function() {
      this.response.statusCode = 404;
      return this.response.end(Handlebars.templates['404']());
    }
  });
});
