Router.map(function() {
  this.route('home', {
    path: '/'
  });
  this.route('dashboard', {
    path: '/dashboard'
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
