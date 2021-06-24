// SET NAME  
    // function setName(name) {
    //     return name;
    // }

    // function sayHello(name, fn) {
    //     console.log("Hello.......", name);
    //     console.log("My name is .....", fn(name));
    // }

    // sayHello('Cuong', setName);

//TINH TONG
    // function calc(a, b, fn) {
    //     const sum = a + b;
    //     const multi = a * b;
    //     fn(sum, multi);
    // }

    // function cb(a, b) {
    //     console.log("Tong la: " + a);
    //     console.log("Tich la: " + b);
    // }

    // calc(3, 9, cb);

//TINH PT MANG

    // function map(arr, fn) {
    //     for (const ele of arr) {
    //         fn(ele);
    //     }
    // }

    // function cb(element) {
    //     console.log(element * 2);
    // }

    // const arr = [1, 2, 3, 4, 5, 6];

    // map(arr, cb);

//THAY DOI PHAN TU MANG

    //     function map(listUser, fn) {
    //         const newArr = [];
    //         for (const ele of listUser) {
    //            newArr.push(fn(ele.name, ele.age));
    //         }

    //         return newArr;
    //     }

    //     function Multi(name, age) {
    //         return `Xin chao <b> ${name} </b> ${age} tuoi`;
    //     }

//CAC HAM
    const listUser = [
        {name: 'Khanh', age: 10},
        {name: 'Huong', age: 7},
        {name: 'Lan', age: 10},
        {name: 'Hoa', age: 89},
        {name: 'Hai', age: 7},
        {name: 'Linh', age: 5},
        {name: 'Tinh', age: 7}
    ]

    //   //  const arr = [1 , 2, 3, 4, 5];
    // console.log(map(listUser, Multi));

    const newArr = listUser.filter(function(value, index) {
        return (value.age > 10);
        //return `Xin chao ${value.name} ${value.age} tuoi`
    })

    console.log(newArr);
    // console.log(newArr.map(function(value, index) {
    //     if (value.age > 10)
    //     return `Xin chao ${value.name} ${value.age} tuoi`
    // }));


//REDUCE

    // const arr = [1, 2, 3, 4, 5];

    // const newArr = arr.reduce(function(a, b) {

    // })
