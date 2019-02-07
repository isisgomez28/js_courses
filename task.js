var Repo = require('./taskRepository');

var Task = function (data) {
    this.name = data.name;
    this.completed = false;
    this.project = data.project;
    this.user = data.user;
};

Task.prototype.complete = function () {
    console.log('completing Task ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('saving Task ' + this.name);
    Repo.save(this);
};

module.exports = Task;