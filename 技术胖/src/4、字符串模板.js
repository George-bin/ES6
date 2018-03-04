// 字符串模板
let jsPang = '技术胖';

let blog = '下面这一步非常关键我们需要设置系统变量';

// let blog = `下面这一步非常关键<strong>${jsPang}</strong>,<br />我们需要设置系统变量`;

// document.write(blog);


// 运算
let a = 105;
let b = 2;
let result = `${a + b}`;
// document.write(result);


// 字符串查找
// document.write(blog.indexOf('关键')>0);   //es5

// includes  判断true false
// document.write(blog.includes('下面'));

// startsWith  开始有没有
console.log(blog.startsWith('我们'));

// endWith  结尾有没有
console.log(blog.startsWith('下面'));


// 复制 repeat(n)
console.log('jsonp|'.repeat(8));

