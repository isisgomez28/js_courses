var repo = function () {

    var db = {};

    var get = function (id) {
        console.log('Get a User ' + id);
        return {
            name: 'admin'
        }
    };

    var save = function (user) {
        console.log('Saving ' + user.name + ' to DB.');
    };

    return {
        get: get,
        save: save
    }
}

module.exports = repo();
