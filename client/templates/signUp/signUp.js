Template.signUp.events({
  'submit #signUpForm': function(event, t) {
    event.preventDefault();

    var signUpForm = $(event.currentTarget);
    var name = signUpForm.find('#name').val();
    var graduationYear = signUpForm.find('#graduationYear').val();
    var email = trimInput(signUpForm.find('#email').val().toLowerCase());
    var password = signUpForm.find('#password').val();
    var passwordConfirm = signUpForm.find('#confirmPassword').val();

    if (isNotEmpty(name) &&
      isNotEmpty(graduationYear) &&
      isNotEmpty(email) &&
      isNotEmpty(password) &&
      isEmail(email) &&
      areValidPasswords(password, passwordConfirm)) {

      Accounts.createUser({
        name: name,
        graduationYear: graduationYear,
        email: email,
        password: password
      }, function(err) {

        if (err) {
          if (err.message === 'Email already exists. [403]') {
            alert('对不起，该邮箱已经存在。');
          } else if (err.message === 'Login forbidden [403]'){
            alert('请登录您的邮箱进行验证。');
          } else {
            alert('对不起，黑板报网站目前无法注册，请联系管理员。');
          }
        }

      });

    }
    return false;
  },
});
