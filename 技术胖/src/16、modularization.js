// modularization 模块化

// export输出  ->  负责进行模块化，也是模块的输出
// import 引入 ->  负责把模块引用，也是模块的引入操作

import{name} from './temp';

console.log(name);

// export
    export var a ='jspang';
    export function add(a,b){
        return a+b;
    }
    // 导入方式
    import {a,add} from './temp';  //也可以分开写

// export default
    export default var k = 'jspang';
    // 对应的引入方式
    import str from './temp';
    import str from './temp';
