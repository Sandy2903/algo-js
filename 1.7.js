const readlineSync = require("readline-sync");
let Pointures = new Number(readlineSync.question('Quel est votre pointure?'));
let Birthyear = new Number(readlineSync.question('Quelle est votre année de naissance?'));
let total = (((Pointures * 2) + 5) * 50) - Birthyear + 1766;
console.log(total);