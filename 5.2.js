const readlineSync = require("readline-sync");
/*1.Définir les propriétés*/
let serieCast = "";
let Arr = []; /*les corchets signifient un tableau*/
let Json = "";
let randomizeCast = "";
/*2. Se poser la question sur le fonctionnement de l'opération*/
/*a. Nommer la fonction de l'opération*/
function randomizeCast(tvSerie) {
  /*b. Que se passe-t-il dans cette fonction?*/
  /*- On aimerait que l'ordinateur demande à l'utilisateur des questions sur la série*/
  let serieName = readlineSync.question("What is your favorite serie?");
  let serieDate = readlineSync.question("When did it create?");
  /*- On se dit que tant que l'utilisateur a écrit une réponse totalement différente du mot "exit", le tableau s'arrête*/
  while (serieCast !== "exit") {
    serieCast = readlineSync.question(
      "Who is in the cast? When finish tape exit"
    );
    /*- Puis, on dit à l'ordinateur que si l'utilisateur a écrit le mot "exit", le tableau reprend les réponses précédentes de l'utilisateur et les rassemble dans un tableau -> Arr*/
    if (serieCast !== "exit") {
      Arr.push(serieCast);
    }
  }
  /*- Enfin, on crée les objets qui seront affichés quand le tableau va s'arrêter*/
  let serieobject = {
    Name: serieName,
    Date: serieDate,
    Cast: Arr,
  };
}
/*Renvoyer une liste de la même distribution mais dans un ordre aléatoire. */
function RandomizeCast(AskTvSeries) {
  let series = AskTvSeries();
  for (let i = series.cast.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tampon = series.cast[i];
    series.cast[i] = series.cast[j];
    series.cast[j] = tampon;
  }
  return series;
}

console.log(JSON.stringify(RandomizeCast(AskTvSeries)));
