const arr = [0, 100, 2, 3, 100, 4]
// const test = arr.forEach((e1) => e1 * 2);

// const test = arr.slice(1, 3); // lay tu vi tri so 1 den vi tri so 3

//arr.splice(1, 1, 99); xoa 1 phan tu o vi tri 1 roi them 99 vao
//arr.splice(1, 1); xoa 1 phan tu o vi tri 1

//arr.pop(); xoa 1 phan tu cuoi

//arr.unshift(99) them vao dau
//arr.shift() bo 1 phan tu o dau mang

//arr.indexOf(100)
//console.log(arr.indexOf(100)); // tim index cua 100
//console.log(arr.lastIndexOf(100)); // tim index cuoi cung cua 100

//console.log(arr.join('-'));   //noi cac phan tu cua mang thanh 1 chuoi

//console.log(arr.includes(1));  //tra ve 2 gia tri dung hoac sai, neu trong mang co 1 thi tra ve true va nguoc lai

//arr.sort((be, to) => to - be); // sap xep giam dan || thay be, to la a,b 
//arr.sort((be, to) => c=be - to); // sap xep tang

//arr.reverse(); // dao nguoc mang

const a = arr.find(e1 => e1 > 2) // lap qua cac phan tu tim kiem gia tri dau tien thoa man

console.log(arr.flat(3)); // 3 la so chieu cua mang, flat là làm phẳng mảng

console.log(a);