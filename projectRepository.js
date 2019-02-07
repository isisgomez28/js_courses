var repo = function () {
    var db = {};

    var get = function (id) {
        console.log('Get a Project ' + id);
        return {
            name: 'Main Project'
        }
    };

    var save = function (project) {
        console.log('Saving ' + project.name + ' to DB.');
    };

    return {
        get: get,
        save: save
    }
}

module.exports = repo();