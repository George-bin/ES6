//二进制声明
let binary = 0B010101;
console.log(binary);

//八进制声明
let octal = 0o666;
console.log(octal);

// 数字判断 ->  Number.isFinite()
let a = 11/4;
console.log(Number.isFinite(a));
console.log(Number.isFinite('hi'));   //false
console.log(Number.isFinite(NaN));    //false
console.log(Number.isFinite(undefined)); //false
console.log(Number.isFinite(null));    //false

//NaN
console.log(Number.isNaN(NaN));        //true
console.log(Number.isNaN(1));        //false

// 是否是整数 -> Number.isInteger()
console.log(Number.isInteger(1));     //true
console.log(Number.isInteger(1.2));     //false
console.log(Number.isInteger(1.0));     //true

//取值范围 es5 -> Math.pow(2, 53)
let ab = Math.pow(2, 53) - 1;
console.log(ab);

//es6 取值范围
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

//判断是否为安全整数  ->  Number.isSafeInteger()
console.log(Number.isSafeInteger(ab));    //true









