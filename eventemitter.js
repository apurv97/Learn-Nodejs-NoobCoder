// Event based programming EventEmitter
// import events module
const EventEmitter = require("events");
// create an object
const eventEmitter = new EventEmitter();
// Creating a listrener for tutorial event
eventEmitter.on("tutorial", (num1, num2) => {
    console.log(`tutorial event called:: ${num1 + num2}`);
});

// Emitting a tutorial event
eventEmitter.emit("tutorial",1,2);

class Person extends EventEmitter {
    constructor(name) {
        // super has to be called as the first call in constructor to properly bind `this`
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}
const me = new Person("Me");
me.on("name", () => {
    console.log("Name is " + me.name);
});

me.emit("name");