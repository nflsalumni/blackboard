Template._header.events({
  "click #logout" : function(event){
    Meteor.logout();
    Router.go('home');

    return false;
  }
});
