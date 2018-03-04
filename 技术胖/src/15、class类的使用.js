// class类
class Coder {
    name(val) {
        console.log(val);
        return val;
    }

    skill(val) {
        console.log(this.name('George')+ ':' + 'skill' + val);
    }
    
    // 类的函数
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }
}

// let geoRge = new Coder;
// geoRge.name();
// geoRge.skill('web');

let geoRge = new Coder(1, 2);
console.log(geoRge.add());

class htmler extends Coder {

}

let pang = new htmler;
pang.name('hello world');



