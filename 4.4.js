let varr = [ 15, 2, 3, 4, 5];
function average (arr) {
    let total = 0
    for (let i=0; i<arr.length; i+=1) {
        total+=arr[i]
    }
    let average = total/arr.length;
    return average;
}

function min (arr) {
    return Math.min.apply(Math, arr);
}

function max (arr) {
    return Math.max.apply(Math, arr);
}
console.log(average(varr));
console.log(min(varr));
console.log(max(varr));
