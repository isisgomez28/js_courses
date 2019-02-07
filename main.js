var Task = require('./task');
// var taskRepo = require('./taskRepository');
// var userRepo = require('./userRepository');
// var projectRepo = require('./projectRepository');
var repoFactory = require('./repoFactory');

var task1 = new Task(repoFactory.task.get(1));

var user = repoFactory.user.get(1);
var project = repoFactory.project.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();

// var task2 = new Task({name: 'Demo 2 - Modules'});
// var task3 = new Task({name: 'Demo 3 - Singletons'});
// var task4 = new Task({name:'Demo 4 - Prototypes'});
// var task5 = new Task({name:'Demo 5 - Git Push'});

// task2.save();
// task3.save();
// task4.save();
// task5.complete();