// function Point(x,y){
//     this.x = x;
//     this.y = y;
// }

// Point.prototype.toString = function(){
//     return '('+ this.x +','+ this.y +')';
// }

// class Point{
//     constructor(x,y){
//         this.x = x;
//         this.y = y;
//     }
//     toString(){
//         return '('+ this.x +','+ this.y +')';
//     }
// }
// console.log(typeof Point);
// var p = new Point(2,6);
// console.log(p);
// console.log(Point === Point.prototype.constructor);

// class Bar{
//     doStuff(){
//         console.log('this is stuff function');
//     }
// }
// var b = new Bar();
// b.doStuff();

// 使用链接。许多库(如jQuery和Lodash)都使用这种模式。在类中，只需在每个函数的末尾返回this就可以将更多的该类方法链接到它上。

class Person{
    constructor(name){
        this.name = name;
    }
    setSurname(surname){
        this.surname = surname;
        return this;
    }
    setAge(age){
        this.age = age;
        return this;
    }
    save(){
        console.log(this.name,this.surname,this.age);
        return this;
    }
}

const person = new Person('daguo')
    .setSurname('winter')
    .setAge(25)
    .save()