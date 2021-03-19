const somethingFromFile1 = require("./examples/file-1"); //Vel
const somethingFromFile2 = require("./examples/file-2"); //{tutor: Vel}
const somethingFromFile3 = require("./examples/file-3"); //hello object
const somethingFromFile4 = require("./examples/file-4"); //{add [function: add]}
const somethingFromFile5 = require("./examples/file-5"); //{ printHello: [Function: printHello], add: [Function: add] }
const somethingFromFile6 = require("./examples/file-6"); //{}

//1. Using only `somethingFromFile2` (_not_ file-1!), get `Vel` printed to the console
console.log(somethingFromFile2.tutor);

//2. Using only `somethingFromFile3`, get `Hello` printed to the console
console.log(somethingFromFile3());

//3. Now using only `somethingFromFile5` (not file-3!), get `Hello` printed to the console
console.log(somethingFromFile5.printHello());
