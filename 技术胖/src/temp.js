var name = 'jsPang';
var b = 'hello world';
var skill = 'web';

//多变量输出
export {name, b, skill};

// 函数模块化输出
export function add(a, b) {
    return a + b;
}

// as的用法 -> 语义化
var a = 'jsPang';
var b = 'George';
var c = 'web';
export {
    x as a,
    y as b,
    z as c
}