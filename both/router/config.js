Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading',
  layoutTemplate: 'appLayout'
});

// Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {dataNotFoundTemplate: 'notFound'});
