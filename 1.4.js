const readlineSync = require("readline-sync");
let firstname = readlineSync.question('What is your firstname?');
console.log("Hello" + firstname);
let name = readlineSync.question('Oh, and your name?');
console.log(name + "...Good!!");
let city = readlineSync.question('Where do you live?');
console.log("Great" + city);
