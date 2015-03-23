Template._postList.helpers({
  'showMoreButton': function () {
    var currentLimit = Router.current().state.get('limit-'+this.tag);
    return currentLimit <= this.posts.length;
  }
});

Template._postList.events({
  'click .btn--load-more': function () {
    var currentLimit = Router.current().state.get('limit-'+this.tag);
    Router.current().state.set('limit-'+this.tag, currentLimit + 5);
  }
});
