'use strict'

class Task {
    constructor (name) {
        this.name = name;
        this.completed = false;
    };

    complete () {
        console.log('completing Task ' + this.name);
        this.completed = true;
    };

    save () {
        console.log('saving Task ' + this.name);
    };
}

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