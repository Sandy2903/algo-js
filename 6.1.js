const readLineSync = require("readline-sync");

class Circle {
  //c'est le constructor
  constructor(xPos, yPos, radius) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.radius = radius;
  }
  //Ajout de la méthode move(xOffset, yOffset) pour la position du cercle
  move(xOffset, yOffset) {
    this.xPos = xOffset;
    this.yPos = yOffset;
  }
  //On aimerait diminuer ou augmenter la taille du rayon
  changeradius(newRadius) {
    this.radius = newRadius;
  }
  // Ajout de l'accesseur
  get surface() {
    return 2 * Math.PI * this.radius;
  }
}
//Création du cercle (xPos, yPos, radius)
let x = new Circle(4, 5, 7);
console.log(x);
//Déplacer le cercle utiliser la méthode "move" d'un objet construit avec la classe "Circle"
x.move(10, 10);
x.changeradius(3);
//Afficher la surface de l'objet x
console.log(x.surface);
console.log(x);
//Vérification
console.log(Math.PI);
