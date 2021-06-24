



Array.prototype.filter2 = function(callback) {
    var arr = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if (result) arr.push(this[index]);
        }
    }
    return arr;
}


courses = [
    {
        course: 'Ruby',
        coin: 200
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
        coin: 700
    }
]

var result = courses.filter2(function(value, index, courses) {
    return value.coin > 800;
})

console.log(result);

