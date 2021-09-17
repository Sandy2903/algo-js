const readlineSync = require("readline-sync");
let phrase1 = readlineSync.question('Quel est votre fruit préféré?');
let phrase2 = readlineSync.question('Quel est votre animal préféré?');
let number = new Number(readlineSync.question('Quel est votre ^age?'));
console.log("Il était un fois, un" + phrase2 + "^agé de" + number + "qui mangeait" + phrase1 + "pendant qu'il marchait vers son école...");