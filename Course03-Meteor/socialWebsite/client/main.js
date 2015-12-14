//Session
// //Account Login

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([{
        _id: "username",
        type: "text",
        displayName: "username",
        required: true,
        minLength: 5,
        func: function(value) {
            console.log("Validating username...");
            var self = this;
            Meteor.call("userExists", value, function(err, userExists) {
                if (!userExists)
                    self.setSuccess();
                else
                    self.setError(userExists);
                self.setValidating(false);
            });
        }
    }, {
        _id: 'email',
        type: 'email',
        required: true,
        displayName: "email",
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
    },
    pwd
]);
/////
// template helpers 
/////

// helper function that returns all available websites
Template.websiteList.helpers({


    websites: function() {
        return Websites.find({}, {
            sort: {
                count_up: -1
            }
        });
    },
    websitesIndex: () => WebsitesIndex,

});
Template.website_item.helpers({
    getUser: function(user_id) {
        var user = Meteor.users.findOne({
            _id: user_id
        });
        if (user) {
            return user.username;
        } else {
            return "anonymous";
        }
    }
});
/////
// template events 
/////

Template.website_item.events({
    "click .js-upvote": function(event) {
        // example of how you can access the id for the website in the database
        // (this is the data context for the template)
        var website_id = this._id;
        // console.log("Up voting website with id " + website_id);
        // put the code in here to add a vote to a website!
        Websites.update({
            _id: website_id
        }, {
            $inc: {
                count_up: 1
            }
        });
        return false; // prevent the button from reloading the page
    },
    "click .js-downvote": function(event) {

        // example of how you can access the id for the website in the database
        // (this is the data context for the template)
        var website_id = this._id;
        Websites.update({
            _id: website_id
        }, {
            $inc: {
                count_down: 1
            }
        });
        // console.log("Down voting website with id " + website_id);
        // put the code in here to remove a vote from a website!
        return false; // prevent the button from reloading the page
    }
})

Template.website_form.events({
    "click .js-toggle-website-form": function(event) {
        $("#website_form").toggle('slow');
        $('#get').attr('disabled', true);
        $('#url').on('keyup', function() {
            var url_value = $("#url").val();
            if (url_value != '') {
                $('#get').attr('disabled', false);
            } else {
                $('#get').attr('disabled', true);
            }
        });
    },
    "click .js-detail-webpage": function(event) {
        var url = $('#url').val();
        console.log(url);
        extractMeta(url, function(err, res) {
            if (!err) {
                console.log(res);
                if (typeof res.title !== 'undefined') {
                    $("#title").val('');

                    $("#title").val(res.title);
                }
                if (typeof res.description !== 'undefined') {
                    $("#description").val('');
                    $("#description").val(res.description);
                }
            }
        });
        return false;
    },
    "submit .js-save-website-form": function(event) {

        // here is an example of how to get the url out of the form:
        var url = event.target.url.value,
            title = event.target.title.value,
            description = event.target.description.value;

        console.log("The url they entered is: " + url + ", " + title + ", " + description);

        //  put your website saving code in here!   
        if (Meteor.user()) {
            Websites.insert({
                title: title,
                url: url,
                description: description,
                createdOn: new Date(),
                createdBy: Meteor.user()._id,
                count_up: 0,
                count_down: 0
            });
        }
        $('#website_form').toggle('hide');
        $('#url').val('');
        $('#title').val('');
        $('#description').val('');
        return false; // stop the form submit from reloading the page

    }
});
//Avatar
Template.user_avatar.helpers({
    users: function() {
        if (Meteor.user()) {
            var user_id = Meteor.user()._id;
            // console.log(user_id);
            return Meteor.users.find({
                _id: user_id
            }).fetch();
        } else {
            return [];
        }
    },
    name: function() {
        var name = '';
        if (Meteor.user()) {
            name = Meteor.user().username;
        } else {
            name = "anonymous";
        }
        return name;
    }
});
Template.top.helpers({
    toprated: function() {
        return Websites.find({}, {
            sort: {
                count_up: -1
            },
            limit: 4
        });
    },
    getUser: function(user_id) {
        var user = Meteor.users.findOne({
            _id: user_id
        });
        if (user) {
            return user.username;
        } else {
            return "anonymous";
        }
    }
});
Template.top.events({
    "click .js-upvote": function(event) {
        // example of how you can access the id for the website in the database
        // (this is the data context for the template)
        var website_id = this._id;
        // console.log("Up voting website with id " + website_id);
        // put the code in here to add a vote to a website!
        Websites.update({
            _id: website_id
        }, {
            $inc: {
                count_up: 1
            }
        });
        return false; // prevent the button from reloading the page
    },
    "click .js-downvote": function(event) {

        // example of how you can access the id for the website in the database
        // (this is the data context for the template)
        var website_id = this._id;
        Websites.update({
            _id: website_id
        }, {
            $inc: {
                count_down: 1
            }
        });
        // console.log("Down voting website with id " + website_id);
        // put the code in here to remove a vote from a website!
        return false; // prevent the button from reloading the page
    }
});
Template.website_item.events({
    'click .js-remove-website': function(event) {
        var website_id = this._id;
        console.log(website_id);
        // use jquery to hide the image component
        // then remove it at the end of the animation
        $("#" + website_id).hide('slow', function() {
            Websites.remove({
                "_id": website_id
            });
        })
    },
});
