AccountsTemplates.configure({
    showForgotPasswordLink: true,
    overrideLoginErrors: true,
    enablePasswordChange: true,
    negativeValidation: true,
    positiveValidation: true,
    negativeFeedback: false,
    positiveFeedback: true
    
});

Avatar.setOptions({
  fallbackType: 'default image',
  gravatarDefault: 'monsterid'
  // defaultImageUrl: '/avatar.jpg'
});
