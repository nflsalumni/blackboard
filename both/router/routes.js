Router.route('/', {
  name: 'home',
  controller: 'HomeController'
});

Router.route('/coding-group', {
  name: 'coding-group',
  controller: 'CodingGroupController'
});

Router.route('/alumni', {
  name: 'alumni',
  controller: 'AlumniController'
});

Router.route('/photos', {
  name: 'photos',
  controller: 'PhotosController'
});

Router.route('/activities', {
  name: 'activities',
  controller: 'ActivitiesController'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/profile', {
  name: 'profile',
  controller: 'ProfileController'
});
