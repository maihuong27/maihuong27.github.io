var arr = [];
function run(x, y) {
  
    if (x < y - 1) {
        arr.push(x + 1);
        return run(x + 1, y);
    }

    return arr;

}


console.log(run(3, 7));