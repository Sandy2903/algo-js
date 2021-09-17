const readlineSync = require("readline-sync");
let Tomates = new Number(readlineSync.question('Combien de tomates avez-vous pris?'));
let Pains = new Number(readlineSync.question('Combien de pains avez-vous pris?'));
let totalProduits = Tomates + Pains;
console.log("Okay... Ca vous fera" + totalProduits + "euros, Madame!");