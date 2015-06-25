var tags = ['post', 'meeting', 'milestone', 'faq'];

CodingGroupController = AppController.extend({
  onBeforeAction: function () {
    var that = this;
    _.each(tags, function (tag) {
      if(!that.state.get('limit-' + tag)) {
        that.state.set('limit-' + tag, 5);
      }
    });

    this.next();
  },
  subscriptions: function() {
    var that = this;
    return _.map(tags, function (tag) {
      var limit = 5;
      if(that.state) {
        limit = that.state.get('limit-' + tag) || limit;
      }
      return Meteor.subscribe('taggedPosts', tag, limit);
    });
  },
  data: {
    posts: function () {
      return Post.find({tags: 'post'},
        {sort: {publishedAt: -1}}).fetch();
    },
    faqs: function () {
      return Post.find({tags: 'faq'},
        {sort: {publishedAt: -1}}).fetch();
    },
    meetings: function () {
      return Post.find({tags: 'meeting'},
        {sort: {publishedAt: -1}}).fetch();
    },
    milestones: function () {
      return Post.find({tags: 'milestone'},
        {sort: {publishedAt: -1}}).fetch();
    }
  },
  onAfterAction: function () {
    Meta.setTitle('建站学习小组专页');
  },
  template: 'codingGroupHome',
  fastRender:true
});
