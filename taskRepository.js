var repo = function () {
    return {
        get: function (id) {
            console.log('Get a Task ' + id);
            return {
                name: 'new task from db'
            }
        },
        save: function (task) {
            console.log('Saving ' + task.name + ' to DB.');
        }
    }
}

module.exports = repo();
