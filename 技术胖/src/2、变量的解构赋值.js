// 解构赋值
// 1、	左右两边结构必须一样
// 2、	右边必须是个东西
// 3、	声明和赋值不能分开（必须在一句话里完成）

// 数组的结构赋值 -> 按顺序解析
let [a, b, c] = [0, 1, 2];

let [x, [y, z], m] = ['a', ['b', 'c'], 'd'];

let [foo='true'] = [];

let [name, age=23] = ['George'];
// console.log('姓名：' + name + '年龄：' + age);

// let [g, h='hi'] = ['hello', undefined];   //'hellohi'
let [g, h='hi'] = ['hello', null];           //'hellonull'
// console.log(g + h);


// 对象解构赋值 -> 对象按名称解析
let {zxx, frr, xzz} = {frr: 'qiang', zxx: 'ming', xzz: 'hong'};
// console.log(frr + zxx + xzz);

//对象另一种解构赋值的方式
let poo;
({foo} = {foo: 'JSgeoge'});
console.log(foo);

// const的使用 -> 字符串解构
const [t, tt, ttt, tttt, ttttt] = 'hello';
console.log(t);
console.log(tt);
console.log(ttt);
console.log(tttt);
console.log(ttttt);


