const readLineSync = require("readline-sync");

class Rectangle {
  constructor(topleftxpos, topleftypos, width, length) {
    this.topleftxpos = topleftxpos;
    this.topleftypos = topleftypos;
    this.width = width;
    this.length = length;
    this.colides = false;
  }

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
let count = 0;
let number = 0;
let X, Y, R, L, X2, Y2;
let rectangle;
while (count < 10) {
  X = Math.floor(Math.random() * 100);
  Y = Math.floor(Math.random() * 100);
  R = Math.floor(Math.random() * 100);
  L = Math.floor(Math.random() * 100);
  X2 = Math.floor(Math.random() * 100);
  Y2 = Math.floor(Math.random() * 100);
  console.log("les cordonnees sont " + X, Y, R, L);
  console.log("les nouvelle cordonnees " + X2, Y2);
  count++;
  rectangle = new Rectangle(X, Y, R, L);
  console.log("collision? " + rectangle.colide(X2, Y2));
}
