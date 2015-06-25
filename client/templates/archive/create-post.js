var _data = new ReactiveVar();

Template.createPost.helpers({
  markdownData: function () {
    return _data.get();
  }
});

Template.createPost.onRendered(function () {
  var _self = this;
  _self.$('#post-text').autosize();
});

Template.createPost.events({
  'keyup #post-text': function (e) {
    _data.set(e.target.value);
  }
});
