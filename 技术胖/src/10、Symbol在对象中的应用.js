// Symbol原始数据类型
let a = new String;
let b = new Number;
let c = new Boolean;
let d = new Array;
let e = new Object;

let f = Symbol();

// console.log(typeof(f));   //Symbol

let jsPang = Symbol('技术胖');
console.log(jsPang);
console.log(jsPang.toString());

let sum = Symbol();
let obj = {
    [jsPang]: '技术胖'
}
console.log(obj[jsPang]);
obj[jsPang] = 'web';
console.log(obj[jsPang]);

let obj2 = { name: 'George', age: 18};
let skill = Symbol();
obj2[skill] = 'web';
console.log(obj2);
for(let item in obj2) {
    console.log(obj2[item]);
}
