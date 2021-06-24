//console.log('Hello World')
//ls: kiểm tra
// cd

// var a = 1;
// var b = 'abc';
// var c = false;
// var d = {
//     name: "aaa",
//     age: 1
// }
// var e = [1, 2, 3, 4, 5];

// console.log(d.name + ' nam nay ' + d.age + ' tuoi');
// console.log(`${d.name} nam nay ${d.age} tuoi`);


// 'use strict'
// var a = 1;
// console.log(typeof a);
// a = 'chuoi';
// console.log(typeof a);

// let a = 1;
// a = 'aaaa';
//let a = 'aaaa'; //loi

// const a = 1;
// a = 2; //loi

// var d = {
//         name: "aaa",
//         age: 1
//     }

//     const k = 'nam';

//     if (k in d) console.log(true);
//     else console.log(false);


// const a = [1, 2, 3, 4, 5];

// for (let x of a) { // let x in a
//     console.log(x);
// }

function tinh(a, b) {
    //console.log(a, b); 
    return a + b;
}

console.log(tinh(1, 2));

// const fn = ()  => { cach khai bao ham khac

// }

// const fn = a => a * 2;

// function fn(a) {
//     return a * 2;
// }

// const meo = {
//     name: 'lala',
//     age: 5,
//     gen: 'nu',
//     eat: function() {
//         console.log(`${this.name} dang an.`);
//         console.log(`${meo.name} dang an`);
//     },
//     changeGender: function(gen) {
//         this.gen = gen;
//     }
// }

// meo.eat();
// meo.changeGender('hmmm');
// console.log(meo.gen);


// function animal() {
//     weight= 5;
//     color =  'black';
// }

// animal.prototype.run = function(){
//     console.log('running.......');
// }

// const meo = new animal();
// const cho = new animal();
// meo.run();
// cho.run();