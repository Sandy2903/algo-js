const readLineSync = require("readline-sync");

class Rectangle {
  //c'est le constructor
  constructor(topleftxpos, topleftypos, width, length) {
    this.topleftxpos = topleftxpos;
    this.topleftypos = topleftypos;
    this.width = width;
    this.length = length;
    this.colides = false;
  }
  //Ajout de la méthode colide(xposition, yposition) pour la position du rectangle
  colide(xposition, yposition) {
    if (
      this.topleftxpos + this.width >= xposition ||
      this.topleftypos + this.length >= yposition
    ) {
      this.colides = true;
      return this.colides;
    } else {
      return this.colides;
    }
  }
}
//Afficher la surface de l'objet rectangle et l'autre rectangle et vérifier s'il y a collision
let rectangle = new Rectangle(20, 30, 30, 25);
console.log(rectangle.colide(20, 20));
let otherrectangle = new Rectangle(20, 50, 15, 10);
console.log(otherrectangle.colide(50, 60));
