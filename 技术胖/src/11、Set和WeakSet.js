// Set  数据结构 - Set的数据结构是以数组的形式构建的
let setArr = new Set(['George', 'Bin', 'Web']);

//add 追加
setArr.add('hi');

//has 查找
console.log(setArr.has('George'));   //true
console.log(setArr.has('ppp'));    //false

console.log(setArr);
//delete 删除 -> 只能删除追加的元素
setArr.delete('hi');
console.log(setArr);


// 输出 for..of
for(let item of setArr) {
    console.log(item);
}

// forEach
setArr.forEach((val) => console.log(val));

// size -> 长度
console.log(setArr.size);

// WeakSet -> 
let WeakObj = new WeakSet();
let obj2 = {a: 'jsPang', b: 'george'};
WeakObj.add(obj2);  //不接受重复对象空间的添加 -> 即：相同对象名
console.log(WeakObj);