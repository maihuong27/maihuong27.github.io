// Array.prototype.some2 = function(callback){
//     var arrLength = this.length;
//     for (var i = 0; i < arrLength; i++) {
//         if(callback(this[i])) return true;
//     }
//     return false;
// }

// var array = [1, 2, 3, 4, 5, 6];

// var result = array.some2(function(value) {
//     return isNaN(value);
// })

// console.log(result);


Array.prototype.some2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true;
            }
        }
    }
    return false;
}

courses = [
    {
        course: 'Ruby',
        coin: 200
    },
    {
        course: 'PHP',
        coin: 750
    },
    {
        course: 'Javascript',
        coin: 800
    },
    {
        course: 'Dart',
        coin: 700
    }
]

console.log(courses.some2(function(value, index, courses) {
    return value.coin > 800;
}));