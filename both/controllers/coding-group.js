var POST_LIMIT = 5;

CodingGroupController = AppController.extend({
  waitOn: function() {
    return [
      Meteor.subscribe('posts', POST_LIMIT),
      Meteor.subscribe('taggedPosts', 'meeting'),
      Meteor.subscribe('taggedPosts', 'milestone'),
      Meteor.subscribe('taggedPosts', 'faq')
    ];
  },
  data: {
    posts: function () {
      return Post.find({tags: {$nin: ['faq', 'meeting', 'milestone']}},
        {$limit: POST_LIMIT}).fetch();
    },
    faqs: function () {
      return Post.find({tags: 'faq'},
        {limit: POST_LIMIT, sort: {publishedAt: -1}}).fetch();
    },
    meetings: function () {
      return Post.find({tags: 'meeting'},
        {limit: POST_LIMIT, sort: {publishedAt: -1}}).fetch();
    },
    milestones: function () {
      return Post.find({tags: 'milestone'},
        {limit: POST_LIMIT, sort: {publishedAt: -1}}).fetch();
    }
  },
  onAfterAction: function () {
    Meta.setTitle('建站学习小组专页');
  },
  fastRender: true,
  template: 'codingGroupHome'
});

CodingGroupController.events({
});
