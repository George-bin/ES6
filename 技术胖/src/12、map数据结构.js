// map 数据结构 -> 适合一对一查找的数据结构
let json = {
    name: 'George',
    age: 23
}
console.log(json.name);

// =>
var map = new Map();
// set 增加值
// key值 -> 任意值 value值 -> 任意值
map.set(json, 'iam');
console.log(map);
map.set('George', json);
console.log(map);

// json和map格式的对比
//    +map的效率和灵活性更好


// 增删查
// get 取值
console.log(map.get(json));

// delete -> 删除特定的值
map.delete(json);
console.log(map);
// clear -> 清空所有
// map.clear();
// console.log(map);

// size -> 元素个数
console.log(map.size);

// has -> true/false
console.log(map.has('George'));   //true