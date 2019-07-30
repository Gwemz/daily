// var name = 1,
//     age = 25;
// if(age > 25){
//     console.log(name);
// }
// const foo = 'bar';
// const baa = {foo};
// const baz = {foo: foo};
// console.log(baa);
// console.log(baz);

// function f(x,y){
//    return {x,y}
// }

// console.log(f(1,3));

// const o = {
//     methods: function(){
//         return 'method!';
//     }
// }

// const o = {
//     methods(){
//         return 'method aa!';
//     }
// }

// console.log(o.methods());

// let birth = '2019/08/30';
// const Person = {
//     name: 'daguo',
//     birth,
//     hello(){
//         console.log('hello ' + this.name + '!');
//     }
// }

// Person.hello()
// console.log(Person.hello());

// function getPoint(){
//     const x = '横坐标';
//     const y = '纵坐标';
//     console.log({x,y});
// }

// getPoint()

// let ms = {};
// function getItem(key){
//     return key in ms?ms[key]:null
// }

// function setItem(key,value){
//     ms[key] = value
// }

// function clear(){
//     ms = {}
// }

// module.exports = {
//     getItem: getItem,
//     setItem: setItem,
//     clear: clear
// }
// module.exports = {getItem,setItem,clear}

// 属性的赋值器和取值器
// const cart = {
//     _wheels: 4,
//     get wheels(){
//         return this._wheels;
//     },
//     set wheels(value){
//         if(value < this._wheels){
//             throw new Error('数值太小了!');
//         }
//         this._wheels = value;
//     }
// }
// cart.wheels 属性取值器调用
// cart.wheels = 3; 属性赋值器赋值
// console.log(cart.wheels);

// cart.wheels = 3;

// const obj = {
//     // class(){
//     //     return 'class name';
//     // }
//     'class':function(){
//         return 'this is a class function!';
//     }
// }

// console.log(obj.class());

// const obj = {
//     * m(){
//         yield 'hello world';        //基于生成器版本的return 关键字
//     }
// }

// console.log(obj.m());

// 定义对象属性的两种方法
// const obj = {};
// obj.foo = true;
// obj['a'+'bc'] = false;
// console.log(obj);

// let propkey = 'foo';
// let obj = {
//     [propkey]: true,
//     abc: 123,
//     ['daguo']:25,
//     ['dd'+'w']:23
// }
// console.log(obj);

// let key = 'name';
// const person = {
//     [key]: 'daguo',
//     'sex': 'very strong man!'
// }
// console.log(person[key]);
// console.log(person['sex']);
// console.log(person['name']);

// 表达式可定义方法名
// let obj = {
//     ['h'+'ello'](){
//         return 'hi new boy!';
//     }
// }
// console.log(obj.hello());

// const foo = 'bar';
// // const bar = 'abc';
// const baz = {[foo]:'abc'};
// console.log(baz);

