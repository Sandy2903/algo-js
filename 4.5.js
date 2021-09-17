let calcDistance = [12, 30];{
   
function Distance(x1, y1, x2, y2) 
    return Math.hypot(y2 - y1, x2 - x1);
}
 
console.log("Calcul la distance entre deux points (0,0)-(10,10): " +calcDistance(0, 0, 10, 10));
console.log("Calcul la distance entre deux points (2,2)-(10,10): "+calcDistance(2, 2, 10, 10));
console.log("Calcul la distance entre deux points (1,1)-(8,8): "+calcDistance(1, 1, 8, 8));
