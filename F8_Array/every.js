// var numbers = [1, 2, 3, 4, 5]
// function checkPositiveNumbers(numbers) {

//     var result = numbers.every(function(number) {
//         return number > 0;
//     })
//     console.log(result);
//     // numbers.every(function(number, index) {
//     //     return number > 0;
//     // })

// }

Array.prototype.every2 = function(callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (!callback(this[i], i, this)) return false;
        }
    }
    return true;
}


courses = [
    {
        course: 'Ruby',
        coin: 1000
    },
    {
        course: 'PHP',
        coin: 850
    },
    {
        course: 'Javascript',
        coin: 900
    },
    {
        course: 'Dart',
        coin: 900
    }
]

console.log(courses.every2(function(value, index, courses) {
    return value.coin > 800;
}));