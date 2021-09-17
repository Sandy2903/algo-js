const readlineSync = require("readline-sync");

function rand10() {
    return Math.floor(Math.random() * 10);
  }
  
  console.log(rand10(10));

let n = readlineSync.question ('Combien de nombre veux-tu générer?')

function multiRand(n) {
    for (let i=0; i < n; i++){
        console.log(rand10());
    }
}

multiRand (n);
