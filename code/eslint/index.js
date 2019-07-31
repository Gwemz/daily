// var name = 1,
//     age = 25;
// if(age > 25){
//     console.log(name);
// }
// 对象的扩展
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

// const keyA = {a:1};
// const keyB = {b:2};
// const myObject = {
//     [keyA]: 'valueA',
//     [keyB]: 'valueB'
// }

// console.log(myObject);

// 方法的name属性
// const person = {
//     fucName(){
//         console.log('hello');
//     }
// }

// console.log(person.fucName.name);

// const person = {
//     name: 'daguo',
//     sex: 'man',
//     age: '25',
//     location: 'hangzhou',
//     call(){
//         return 'phone number is 1515151554';
//     }
// }
// 1.for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
// for(let k in person){
//     if(typeof(person[k]) == 'function'){
//         console.log(person[k]());
//     }else{
//         console.log(k +' is '+ person[k]);
//     }
// }

// 2.Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
// let personKeys = Object.keys(person);
// console.log(personKeys);

// 3.Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
// console.log(Object.getOwnPropertyNames(person));

// 4.Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。
// console.log(Object.getOwnPropertySymbols(person));

// 5.Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
// console.log(Reflect.ownKeys(person));

// super关键字
// const proto = {
//     foo: 'hello'
// }

// const obj = {
//     foo: 'world',
//     find(){
//         return super.foo;
//     }
// }
// Object.setPrototypeOf(obj,proto)
// console.log(obj.find())

// const obj = {
//     foo: super.foo
// }

// 1.数组去重
// const j = [...new Set([1,2,2,3,3,'a','d','e','f','a'])];
// console.log(j);

// 2.数组清洗(洗掉数组中一些无用的值，如0, undefined, null, false等)
// const myArray = [0,undefined,null,false,0,1,2,3,4,'a','b','c','d','fejig'];
// console.log(myArray.filter(Boolean))
// myArray.map(item => {
//     console.log(item);
// }).filter(Boolean)

// 3.创建空对象(我们可以使用对象字面量{}来创建空对象，但这样创建的对象有隐式原型__proto__和一些对象方法比如常见的hasOwnProperty，下面这个方法可以创建一个纯对象。)

// let obj = {};
// console.log(obj);

// let newObj = Object.create(null);
// console.log(newObj);

// 4.合并对象(JS中我们经常会有合并对象的需求，比如常见的给用传入配置覆盖默认配置，通过ES6扩展运算符就能快速实现。)
// const person = {name:'daguo',gender:'male'};
// const tools = {computer:'mac',editor:'vscode'};
// const basicInfo = {address:'hangzhou',age:25};
// const summary = {...person,...tools,...basicInfo};
// console.log(summary);

// 5.设置函数必传参数
// const isRequired = () => {throw new Error('param is required');};
// const hello = (name = isRequired()) => { console.log(`hello ${name}`) }
// hello()
// hello(undefined)
// hello(null)
// hello('winter');

// 6.解构别名(ES6中我们经常会使用对象结构获取其中的属性，但有时候会想重命名属性名，以避免和作用域中存在的变量名冲突，这时候可以为解构属性名添加别名。)
// const obj = {x:1};
// const { x } = obj;
// const { x:otherName } = obj;
// console.log({ x:otherName });

// 7.获取查询字符串参数(以前获取URL中的字符串参数我们需要通过函数写正则匹配，现在通过URLSearchParamsAPI即可实现。)
// console.log(window.location.search);    // ?id=23&name=daguo&age=25&name=winter
// var urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams);
// console.log(urlParams.has('id'));   //true
// console.log(urlParams.get('name'));     //daguo
// console.log(urlParams.getAll('name'));      //["daguo","winter"]
// console.log(urlParams.toString());
// console.log(urlParams.append('address','1'));   //undefined

