// 对象赋值
let name = 'George';
let skill = 'web';
// es5
// let obj = {name: name, skill: skill};

// es6
// let obj = {name, skill};
// console.log(obj);

// key值的构建
let key = 'skill';
var obj = {
    [key]: 'web'
}
console.log(obj);

// 自定义对象方法
let obj2 = {
    add: function(a, b) {
        return a + b;
    }
}
console.log(obj2.add(1,2));

// is()
let obj3 = { name: 'jsPang' };
let obj4 = { name: 'jsPang' };
// es5
console.log( obj3.name === obj4.name );    //true
// es6
console.log(Object.is(obj3.name, obj4.name));  //true

// === 同值相等，is严格相等
console.log(+0 === -0);     //true
console.log(Object.is(+0, -0));  //false

console.log(NaN === NaN);   //false
console.log(Object.is(NaN, NaN));   //true


// assign 合并对象
let a = { a: 'jsPang' };
let b = { b: 'George' };
let c = { c: 'Ming' };
let d = Object.assign(a, b, c);
console.log(d);
