Template.profile.helpers({
  profile: function () {
    return Meteor.user().profile;
  }
});

Template.profile.events({
  'click #btn-save': function (e) {
    event.preventDefault();
    var currentUserId = Meteor.userId();
    Meteor.users.update({ _id: currentUserId }, {
      $set: {
        'profile.name': $('#real-name').val(),
        'profile.graduationYear': $('#year-of-graduation').val()
      }
    }, function (err, result) {
      if(err) {
        alert('保存错误！');
      }
      else {
        alert('保存成功！');
      }
    });
  }
});

// Template.profile.events({
//   'submit form': function(event) {
//     event.preventDefault();
//     var data = SimpleForm.processForm(event.target);
//     Meteor.users.update(Meteor.userId(), {$set: {profile: data}});
//   }
// });
