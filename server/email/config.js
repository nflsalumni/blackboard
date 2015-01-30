Meteor.startup(function () {
  Meteor.Mailgun.config({
    username: process.env.MAILGUN_USERNAME,
    password: process.env.MAILGUN_PASSWORD
  });
});

Meteor.startup(function() {

  // emailTemplates configuration.
  Accounts.emailTemplates.from = '南京外国语学校校友会黑板报 <nfls.alumni@gmail.com>';


  // VerifyEmail email configuration
  Accounts.emailTemplates.verifyEmail.subject = function(user) {
    return '南京外国语学校校友会网站注册验证';
  };

  Accounts.emailTemplates.verifyEmail.text = function(user, url) {
    return '请点击邮件中的链接来完成注册: ' + url;
  };

  // resetPassword email configuration
  Accounts.emailTemplates.resetPassword.subject = function(user) {
    return '南京外国语学校校友会网站密码重置';
  };

  Accounts.emailTemplates.resetPassword.text = function(user, url) {
    return '请点击邮件中的链接来完成密码重置: ' + url;
  };

  // Send verification email for user's registration.
  Accounts.onCreateUser(function(options, user) {
    user.profile = {
      name: options.name,
      graduationYear: options.graduationYear,
    };

    user.authenticated = false;

    // Wait 3 seconds for Meteor to create the user before sending an email.
    Meteor.setTimeout(function() {
      Accounts.sendVerificationEmail(user._id);
    }, 3 * 1000);

    return user;
  });

  // Called whenever a login is attempted
  Accounts.validateLoginAttempt(function(attempt) {
    if (attempt.user && attempt.user.emails && !attempt.user.emails[0].verified) {
      //Todo log message.
      return false; // the login is aborted
    }
    return true;
  });
});
