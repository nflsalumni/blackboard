var _data = new ReactiveVar();

Template.createPost.helpers({
  markdownData: function () {
    return _data.get();
  }
});

Template.createPost.onRendered(function () {
  var _self = this;
  _self.$('#post-text').autosize();

  $.ajax({
      url : "/example.md",
      dataType: "text",
      success : function (data) {
        _data.set(data);
        Meteor.setTimeout(function () {
          _self.$('#post-text').trigger('input');
        });
      }
  });
});

Template.createPost.events({
  'input #post-text': function (e) {
    _data.set(e.target.value);
  }
});
