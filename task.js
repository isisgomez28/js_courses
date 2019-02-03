var task = {
    title : 'My Task',
    description : 'My description'
};

Object.defineProperty(task, 'toString', {
    value : function () {
        return this.title + ' ' + this.description;
    },
    writable: false,    // Esto evita que se pueda se le pueda asignar a .toString valores.
    enumerable: false,   // Esto expone todo (propierties y functions) lo que define el objeto task.
    configurable: false  // Esto permite reconfigurar la definicion de la propiedad.
});

/**
 * task.toString = 'Hello World!'; 
 * Probocaria un error en el console.log() si writable = true
 * porque task.toString ya no seria una funcion sino una variable.
 * 
 * Para evitar esto en el Object.defineProperty() debemos de asginarle
 * a la propiedad writable = false.
*/

//task.toString = 'Hello World!';

/**
 * Herencia de Objetos
 */
var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
    value: function () {
        return this.title + ' is URGENT!!';
    },
    writable: false,
    enumerable: false,
    configurable: false
});

console.log(task.toString());
console.log(urgentTask.toString());