// 对象的函数解构 JSON
let json = {
    a: 'jsPang',
    b: 'George'
}

function fn({a, b='hi world!'}) {
    console.log(a, b);
}

// fn(json);

// 数组解构
let arr = ['Blue', 'George', 'Ming'];
function fn2(a, b, c) {
    console.log(a, b, c);
}
// fn2(...arr);


// in 的用法(判断空位) -> 判断元素是否属于一个对象或数组
let obj = {
    a: 'George',
    b: 'Ming'
}
// console.log('c' in obj);   //false

let arr2 = ['george', 'ming', 'blue'];
console.log(0 in arr2);   //true
let arr3 = [,,,];
console.log(0 in arr3);   //false

// 遍历数组 for循环  
// forEach
let arr4 = ['george', 'ming', 'blue'];
// arr4.forEach((val, index) => console.log(index, val));

// filter
// arr4.filter(x => console.log(x));

// some
// arr4.some(x => console.log(x));

// map
// console.log(arr.map(x => 'web'));

// 数组转换为字符串
// console.log(arr4.toString());

// console.log(arr4.join('-'));




