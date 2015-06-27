var _data = new ReactiveVar();

Template.createPost.helpers({
  markdownData: function () {
    return _data.get();
  }
});

Template.createPost.onRendered(function () {
  var _self = this;
  $.ajax({
      url : "/example.md",
      dataType: "text",
      success : function (data) {
          _self.$('#post-text').val(data).trigger('input');
      }
  });
  _self.$('#post-text').autosize();
});

Template.createPost.events({
  'input #post-text': function (e) {
    _data.set(e.target.value);
  }
});
