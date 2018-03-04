// function add(a, b=1) {
//     if(a == 0) {
//         throw new Error('A is Error');
//     }
//     return a + b;
// }
// console.log(add(0));

// 严谨模式
function add2(a, b) {
    'use strict'
    return a + b;
}

function add2(a, b=1) {  
    return a + b;
}
// console.log(add2.length);  //出错， 不能存在默认参数

// 箭头函数
var add = (a, b=1) => a+b;
console.log(add(2));

var add3 = (a, b=1) => {   //不是一行时，需要使用花括号
    console.log('hi world!');
    return a+b;
}
console.log(add3(4));





