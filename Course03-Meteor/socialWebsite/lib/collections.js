Websites = new Mongo.Collection("websites");
Websites.allow({
    insert: function(userId, doc) {
        if (Meteor.user()) {
            if (userId !== doc.createdBy) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    },
    update: function(userId, doc, fields, modifier) {
        if (Meteor.user()) {
            return true;
        } else {
            return false;
        }
    },
    remove: function(userId, doc) {
        return true;
    }
});

WebsitesIndex = new EasySearch.Index({
    collection: Websites,
    fields: ['title','createdBy','description','url'],
    engine: new EasySearch.Minimongo()
});
