Template.signIn.helpers({
  resetPassword: function() {
    if (Accounts._resetPasswordToken) {
      return true;
    }

    return false;
  }
});

Template.signInMain.events({
  'submit #signInForm': function(event, t) {
    event.preventDefault();

    var signInForm = $(event.currentTarget);
    var email = trimInput(signInForm.find('#email').val().toLowerCase());
    var password = signInForm.find('#password').val();

    if (isNotEmpty(email) &&
      isEmail(email) &&
      isNotEmpty(password) &&
      isValidPassword(password)) {

      Meteor.loginWithPassword(email, password, function(err) {

        if (err) {
          if (err.message === 'User not found [403]') {
            alert('对不起，您输入的注册邮箱不存在。');
          } else if (err.message === 'Incorrect password [403]') {
            alert('对不起，您输入的密码不正确。');
          } else if (err.message === 'Login forbidden [403]') {
            alert('请前往您的注册邮箱，然后点击注册邮件中的链接。');
          }
        } else {
          alert('亲爱的校友，欢迎回到黑板报！');
          Router.go('home');
        }

      });

    }

    return false;
  },
});

Template.forgotPassword.events({
  'submit #forgotPasswordForm': function(event, t) {
    event.preventDefault();

    var forgotPasswordForm = $(event.currentTarget),
      email = trimInput(forgotPasswordForm.find('#forgotPasswordEmail').val().toLowerCase());

    if (isNotEmpty(email) && isEmail(email)) {

      Accounts.forgotPassword({
        email: email
      }, function(err) {
        if (err) {
          if (err.message === 'User not found [403]') {
            alert('对不起，您输入的注册邮箱不存在。');
          } else {
            alert('发送密码重置邮件出现错误，请等待几秒后重试。');
          }
        } else {
          alert('密码重置邮件已发送，请检查您的邮箱。');
        }
      });

    }
    return false;
  },
});

Template.ResetPassword.events({
  'submit #resetPasswordForm': function(event, t) {
    event.preventDefault();

    var resetPasswordForm = $(event.currentTarget);
    var password = resetPasswordForm.find('#resetPasswordPassword').val();
    var passwordConfirm = resetPasswordForm.find('#resetPasswordPasswordConfirm').val();


    if (isNotEmpty(password) && areValidPasswords(password, passwordConfirm)) {
      Accounts.resetPassword(Accounts._resetPasswordToken, password, function(err) {
        if (err) {
          alert('对不起，重置密码出现问题。请联系管理员。');
        } else {
          alert('您的新密码已经生效了。');

          // Destroy resetPasswordToken.
          Accounts._resetPasswordToken = null;

          Router.go('home');
        }
      });
    }
    return false;
  }
});
