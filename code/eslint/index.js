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

let birth = '2019/08/30';
const Person = {
    name: 'daguo',
    birth,
    hello(){
        console.log('hello ' + this.name + '!');
    }
}

Person.hello()
// console.log(Person.hello());