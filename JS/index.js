// ================================= JS1 =================================
/**
 * primitive data types
 *
 * number
 * string
 * boolean
 * null
 * undefined
 *
 * bigint
 * symbol
 */

// console.log(typeof "1");

// let obj = {
//   a: 1,
//   b: "2",
//   c: {},
//   d: [],
// };
// let arr = [1, "2", [], {}, () => {}]; // not good
// function foo() {}
// console.log(arr);
// prototype chain
// arr -> Array prototype -> Object prototype -> null
// console.log(typeof null);

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

// for
// while
// arr.forEach
// arr.map
// arr.filter

// let key = "a";
// console.log(obj[key]); // => obj.a

// function foo(input) {
//   // primitive data types are passed by value
//   input = 2;
//   console.log(input); // 2
// }

// let num = 1;
// foo(num);
// console.log(num); // 1

// let a = 1;
// let b = a;
// let c = b;

// b = 5;
// console.log(a, b, c);

// function foo(input) {
//   // object data types are passed by reference
//   input.name = "bob";
//   console.log(input); // bob
// }

// let obj = { name: "alice" };
// foo(obj);
// console.log(obj); // bob
// // obj => {} <= input

// let person = {
//   name: "alice",
// };
// let person2 = person;
// person2.name = "bob";
// console.log(person, person2);

// console.log(1 === "1");
// console.log(person === person2); // 000001 000001

// // coercion
// console.log(1 == "1");

// // explicit type conversion
// let str = "1";
// console.log(typeof parseInt(str).toString());

//                   var    |   let   |   const
// scope:        function       block     block
// hoisting:       yes           no         no
// redeclare:      yes           no         no
// reassign:       yes           yes        no

// function foo() {
//   // block
//   var a;
//   console.log(a);
//   if (true) {
//     var a = 1;
//   }
//   console.log(a);
// }

// foo();

// function foo1() {
//   // block
//   let a;

//   if (true) {
//     console.log(a);
//     let a = 1;
//   }
//   console.log(a);
// }

// foo1();

// var a = 1;
// // after 100 lines
// var a = 2;
// a = 3;

// let b = 1;
// // let b = 2;
// b = 2;

// const c = 1;
// // const c = 2
// // c = 2;

// const obj = {};

// obj.a = 1; // this is not reassignment

// foo();
// function foo() {
//   console.log("hello");
// }

// foo1();
// const foo1 = () => {
//   console.log("hello");
// };

// closure
// function add() {
//   let count = 0;
//   return function () {
//     count += 1;
//     console.log(count);
//   };
// }

// const returnedFn = add();
// returnedFn();
// returnedFn();

// ================================= JS2 =================================
// ES 6 - ECMAScript 2015

// rest operator, spread operator, destrucutring, arrow function, string template

// rest operator ...: collect arguments and put them into one array

// function foo(val1, val2, ...args) {
//   console.log(val1, val2);
//   console.log(args);
//   // console.log(arguments); // array-like object
// }

// foo(1, 2, 3, 4, 5);

// spread operator ...
// shallow copy: the properties will point to the same reference as the original one (objects)
// deep copy:
// 1. write your own function
// 2. lodash
// 3. JSON.stringify()

// const person = {
//   name: "alice",
//   age: 18,
//   address: {
//     apt: 123123,
//     street: "street",
//     city: "xxx",
//   },
//   date: new Date(),
// };

// const person2 = {
//   name: person.name,
//   age: person.age,
//   address: person.address,
// };

// const person3 = { ...person, name: "bob", foo: 1 };
// console.log(person, person3);
// const person3 = JSON.parse(JSON.stringify(person));

// console.log(person3);
// console.log(person.address === person3.address);

// const arr = [1, 2, 3, [0, 0]];
// const arr1 = [5, 6, 7];
// const arr2 = [...arr, 1, ...arr1, 0];
// console.log(arr2);

// destrucutring

// const person = {
//   name: "alice",
//   age: 18,
//   address: {
//     apt: 123123,
//     street: "street",
//     city: "xxx",
//   },
//   date: new Date(),
// };

// const name = person.name;
// const age = person.age;
// const city = person.address.city;

// const name = "1";
// const { name: personName, age, address } = person;
// console.log(name, personName, age);
// console.log(address === person.address);

/**
 *          function keyword vs arrow function
 * 1. syntax
 * 2. this keyword: it depends on the calling context, it refers to the caller of the function
 * 3. arguments
 * 4. prototype
 */

// const obj = {
//   name: "alice",
//   thisValue: this,
//   foo() {
//     // this is equvalent to function keyword
//     console.log(this.thisValue); // obj
//   },
//   foo2: () => {
//     console.log(this); // window, line 240
//   },
// };

// bind
// foo2();

// obj.foo2();
// console.log(window.obj.thisValue); // window

// const obj = {
//   name: "alice",
//   foo() {
//     console.log(this);
//     function foo2() {
//       console.log(this);
//     }
//     foo2();
//     // return foo2;
//   },
// };

// const foo2 = obj.foo();
// foo2();

// const module = {
//   x: 42,
//   getX: function () {
//     return this.x;
//   },
// };

// const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// // Expected output: undefined

// const boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());
// // Expected output: 42

// const age = 18;
// console.log(`the age is: ${age}. adjasdasdasd`);

// for ... of ... (ES6)
// iterable objects: array, Map, Set, NodeList, string

const arr = [1, 2, 3];
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (ele of Object.keys(obj)) {
  console.log(ele);
}

// for ... in ...
// enumerable properties on an object
// anything not enumerable will be ignored in the loop
for (ele in obj) {
  console.log(ele);
}
