Meteor.startup(function() {
  Accounts.ui.config({
    passwordSignupFields: 'EMAIL_ONLY'
  });
  return AccountsEntry.config({
    homeRoute: '/',
    dashboardRoute: '/dashboard',
    language: 'en',
    showSignupCode: false,
    profileRoute: 'profile',      // mandatory - path to redirect to after successful sign-in
    extraSignUpFields: [{             // Add extra signup fields on the signup page
      field: "name",                           // The database property you want to store the data in
      label: "真实姓名",                      // The html lable for the field
      placeholder: "张三",                 // A placeholder for the field
      type: "text",                            // The type of field you want
      required: true                           // Adds html 5 required property if true
    },
    {             // Add extra signup fields on the signup page
      field: "class",                           // The database property you want to store the data in
      label: "南外届数",                      // The html lable for the field
      placeholder: "以高中毕业年份为准，没有毕业于南外高中的请自行推算假定年份",                 // A placeholder for the field
      type: "text",                            // The type of field you want
      required: true                           // Adds html 5 required property if true
     }]
  });
});
