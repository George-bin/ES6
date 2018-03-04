// JSON数组格式
let json = {
    '0': 'jsPang',
    '1': 'jsGeorge',
    '2': 'jsHappy',
    length: 3
}

//Array.from -> 将json数组格式转换为数组格式
let arr = Array.from(json);  
console.log(arr);   // ["jsPang", "jsGeorge", "jsHappy"]


// Array.of方法
let stt = '[2,3,4,5]';
let arr2 = Array.of(2,3,4,5);
let arr3 = Array.of('hello','world','!');
console.log(arr2);   //[2, 3, 4, 5]
console.log(arr3);   //["hello", "world", "!"]


// find() -> 实例方法 -> 数组元素的查找方法
// value 表示当前查找的值
// index 表示当前查找值的索引
// arr 原型
let arr4 = [1,2,3,4,5,6,7,8,9];   //也可查找字符串
console.log(arr4.find(function(value, index, arr4) {
    return value > 3;
}));   //4


// fill() -> 实例方法 -> 替换元素
// 参数1：替换值
// 参数2：替换起始位置
// 参数3：替换结束位置
let arr5 = ['George', 'Ming', 'Blue'];
arr5.fill('web', 1, 3); 
console.log(arr5);


// 数组循环 for..of
// keys() 数组元素的下标
// entries() 元素下标+元素值

// for(let item of arr3.entries()) {
//     console.log(item);
// }

for(let [index, val] of arr3.entries()) {
    console.log(index + ':' + val);
}

//entries() -> 手动循环
let list = arr.entries();
console.log(list.next().value);
console.log('-----------');
console.log(list.next().value);
console.log('****************');
console.log(list.next().value);
console.log('++++++++++++++++++');





