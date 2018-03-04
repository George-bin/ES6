// proxy 代理  es6 增强 对象和函数（方法） 声明周期
let obj = {
    add: function(val) {
        return val + 100;
    },
    name: 'I am George!'
}
console.log(obj.add(100));   //200

console.log(obj.name);


// 第一个花括号：数据 第二个花括号：预处理
let pro = new Proxy({
    add: function(val) {
        return val + 100;
    },
    name: 'I am George!'
},{
    //get -> 在得到属相值时预先处理一些东西
    get: function(target, key, property) {
        console.log(target);   //目标对象
        console.log(key);      //属性
        return target[key];
    },
    //set -> 在设置属性值时预先处理一些东西
    set: function(target, key, value, receiver) {
        console.log(`setting ${key} = ${value}`);

        //返回结果
        return target[key] = value;
    }
    
});
pro.name = 'hi';
console.log(pro.name);

// apply
let target = function() {
    return 'I am George';
}
let handler = {
    apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}
let pro2 = new Proxy(target, handler);
console.log(pro2());
