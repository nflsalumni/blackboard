Template.home.created = function() {
  // Validate user's registration email.
  // The user accesses Home page by clicking on the link in registratrion confirrmation email.
  if (Accounts._verifyEmailToken) {
    Accounts.verifyEmail(Accounts._verifyEmailToken, function(err) {
      if (err) {

        if (err.message === 'Verify email link expired [403]') {
          alert('对不起，您的注册邮箱验证链接已经过期。请前往登录页面发送新的验证邮件。');
        }
      } else {
        alert('恭喜，您的注册邮箱已经被验证。');
      }
    });
  }

  // Destroy the verifyEmailToken after email verification.
  Accounts._verifyEmailToken = null;

  // Redirect to signIn page to reset password>
  // The user accesses Home page by clicking on the link in password reset email.
  if (Accounts._resetPasswordToken) {
    Router.go('signIn');
  }
};

Template.home.rendered = function() {

};
