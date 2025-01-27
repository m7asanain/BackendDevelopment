const { log } = require("console");
const EventEmitter = require("events");

class MyCustomeEmitter extends EventEmitter {
    constructor() {
        super();
        this.greeting = "Hello"
    }

    greet(name) {
        this.emit("greeting", `${this.greeting}, ${name}`);
    }
}

const myCustomeEmitter = new MyCustomeEmitter();

myCustomeEmitter.on("greeting", (input) => {
    console.log(`Greeting event`, input);
});

myCustomeEmitter.greet("Mustafa Alkamali")