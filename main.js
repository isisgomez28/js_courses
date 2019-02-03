var Task = require('./task');

var task1 = new Task('Demo 1 - Constructors');
var task2 = new Task('Demo 2 - Modules');
var task3 = new Task('Demo 3 - Singletons');
var task4 = new Task('Demo 4 - Prototypes');
var task5 = new Task('Demo 5 - Git Push');

task1.complete();
task2.save();
task3.save();
task4.save();
task5.complete();