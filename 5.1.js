const readlineSync = require("readline-sync");
/*1.Définir les propriétés*/
let serieCast = "";
let Arr = []; /*les corchets signifient un tableau*/
let Json = "";
/*2. Se poser la question sur le fonctionnement de l'opération*/
/*a. Nommer la fonction de l'opération*/
function askTVserie(){
/*b. Que se passe-t-il dans cette fonction?*/
/*- On aimerait que l'ordinateur demande à l'utilisateur des questions sur la série*/
    let serieName = readlineSync.question("What is your favorite serie?");
    let serieDate = readlineSync.question("When did it create?");
/*- On se dit que tant que l'utilisateur a écrit une réponse totalement différente du mot "exit", le tableau s'arrête*/
       while (serieCast !== "exit"){
        serieCast = readlineSync.question("Who is in the cast? When finish tape exit");
/*- Puis, on dit à l'ordinateur que si l'utilisateur a écrit le mot "exit", le tableau reprend les réponses précédentes de l'utilisateur et les rassemble dans un tableau -> Arr*/
            if (serieCast !== "exit"){
            Arr.push(serieCast);
        }
    }
/*- Enfin, on crée les objets qui seront affichés quand le tableau va s'arrêter*/
    let serieobject = {
            "Name": serieName,
            "Date": serieDate,
            "Cast": Arr
    }
/*- On dit à l'ordinateur qu'on aimerait que ce qu'il y a dans notre objet soit en chaîne de caractères*/
    Json = JSON.stringify(serieobject);
}
/*3. Maintenant que le fonctionnement est fini, on lance les fonctions*/
askTVserie ();
console.log(Json);    

    

