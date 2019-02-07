var repo = function () {

    var db = {};

    var get = function (id) {
        console.log('Get a Task ' + id);
        return {
            name: 'new task from db'
        }
    }

    var save = function (task) {
        console.log('Saving ' + task.name + ' to DB.');
    }

    return {
        get: get,
        save: save
    }
}

module.exports = repo();
