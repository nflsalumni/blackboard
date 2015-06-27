Router.configure({
  controller: 'AppController',
  loadingTemplate: 'loading',
});

// Router.plugin('loading', {loadingTemplate: 'loading'});
Router.plugin('dataNotFound', {
  dataNotFoundTemplate: 'notFound'
});

// Router.plugin('ensureSignedIn', {progress:false,
//     only: ['createPost']
// });
