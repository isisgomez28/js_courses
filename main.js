var Task = require('./task');
var Repo = require('./taskRepository');

var task1 = new Task(Repo.get(1));
var task2 = new Task({name: 'Demo 2 - Modules'});
var task3 = new Task({name: 'Demo 3 - Singletons'});
var task4 = new Task({name:'Demo 4 - Prototypes'});
var task5 = new Task({name:'Demo 5 - Git Push'});

task2.save();
task3.save();
task4.save();
task5.complete();