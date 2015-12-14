Router.configure({
    layoutTemplate: 'masterLayout',
    yieldTemplates: {
        nav: {
            to: 'nav'
        },
        footer: {
            to: 'footer'
        },
    }
});

Router.map(function() {
    this.route('home', {
        path: '/'
    });
    this.route('websiteList');
    this.route('detail', {
        path: '/websiteList/:_id',
        data: function() {
            return Websites.findOne({
                _id: this.params._id
            });
        }
    });
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');