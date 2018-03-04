//扩展运算符 ...name

function fnJs(...arg) {
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
    
}
// fnJs(1, 2, 3, 4, 5);

let arr1 = ['qiang', 'ming', 'hong']; 
// let arr2 = arr1;
// let arr2 = [...arr1];   //相等于将参数逐个传参，并没有调用同一个对象
// console.log(arr2);
// arr2.push('hi');
// console.log(arr2);  //["qiang", "ming", "hong", "hi"]
// console.log(arr1);  //["qiang", "ming", "hong"]

function fn2(first, ...arg) {
    // console.log(arg.length);

    // for(let i = 0; i < arg.length; i++) {
    //     console.log(arg[i]);
    // }

    for(let val of arg) {   //es6
        console.log(val);
    }
}

fn2(0, 1, 2, 3, 4);  //这里第一个实参代表第一个形参



