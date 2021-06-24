// Array.prototype.forEach2 = function(callback2) {
//   var arrayLength = this.length, output = [];
//   for (var i = 0; i < arrayLength; i++) {
// 		var element = callback2(this[i]);
//         output.push(element);
//   }
//   return output;
// }

// var arr = [1, 2, 3, 4, 5]

// var result = arr.forEach2(function(value) {
// 		return value;
// })

// console.log(result);

Array.prototype.forEach2 = function(callback) {
  for (var index in this) {
    if (this.hasOwnProperty(index)) {
      callback(this[index], index, this);
    }
  }
}

var arr = [];

arr.forEach2(function(value, index, array) {
  console.log(value);
})