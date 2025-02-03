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

// const arr = [1, 2, 3];
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// for (ele of Object.keys(obj)) {
//   console.log(ele);
// }

// // for ... in ...
// // enumerable properties on an object
// // anything not enumerable will be ignored in the loop
// for (ele in obj) {
//   console.log(ele);
// }

// ================================= JS3 =================================

// const p = {
//   greeting() {
//     console.log(`hello from ${this.name}`);
//   },
// };

// const person = {
//   name: "alice",
//   __proto__: p, // person -> p (has the greeting method)
// };

// person.greeting();
// console.log(person);

// const person2 = {
//   name: "bob",
//   greeting: "hello",
//   __proto__: p,
// };

// console.log(person2.greeting);

// const p1 = {
//   greeting() {
//     console.log(`hello from ${this.name}`);
//   },
// };

// const person = Object.create(p1);
// console.log(person === p1);

// constructor function
// function Person(name) {
//   this.name = name;
// }

// const person1 = new Person("alice");
// const person2 = new Person("bob");
// console.log(person1, person2);

// // factory function
// function Person2(name) {
//   const obj = {};
//   obj.name = name;
//   obj.greeting = function () {
//     console.log(`hello from ${this.name}`);
//   };
//   return obj;
// }

// const p1 = Person2("alice");
// const p2 = Person2("alice");
// console.log(p1.greeting === p2.greeting);

// class keyword is a syntax sugar in javascript
// encapsulation, inheritance, polymorphism, abstraction
// encapsulation - hide some information from the public
// inheritance
// polymorphism
//      - no overloading in javascript (same name, different arguments),
//      - overriding (same method in parent class and child class, but different implementation)
// abstraction - hiding the complexity behind API

// class Person {
//   #age;
//   static count = 0;
//   constructor(name, age) {
//     this.name = name;
//     this.#age = age;
//     Person.count++;
//   }

//   greeting() {
//     console.log(`hello from ${this.name}`);
//   }

//   static getCount() {
//     return Person.count;
//   }

//   set age(newAge) {
//     this.#age = newAge;
//   }

//   get age() {
//     console.log("getter");
//     return this.#age;
//   }
// }

// const p1 = new Person("alice", 18);
// p1.age = 10;
// console.log(p1.age);

// class Student extends Person {
//   constructor(name, age, id) {
//     super(name, age);
//     this.id = id;
//   }

//   greeting() {
//     console.log(`hello from student ${this.name}`);
//   }
// }

// const s1 = new Student("bob", 18, 1);
// console.log(s1);
// s1.greeting();
// p1.greeting();

// // instance methods vs static methods

// // to create an instance method
// // 1. add it to the class
// // 2. use __proto__ and prototype

// p1.__proto__.walk = function () {
//   // adding walk function to Person
//   console.log(`${this.name} is walking...`);
// };
// p1.walk();
// s1.walk();

// Person.prototype.run = function () {
//   // adding run function to Person
//   console.log(`${this.name} is running...`);
// };

// p1.run();
// s1.run();

// static methods - called directly on the prototype object/construcntor function/class
// they are usually utility functions

// console.log(Person.getCount());

const arr = [1, 2, 3, 4, 5];
console.log(arr);

arr.__proto__.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.myForEach((value, index, array) => {
  console.log(value, index, array);
});

// today's assignment: implement array methods
// fill, filter, map, reduce, find, slice, splice, push, pop, join

const arr2 = [5, 6, 7, 8];
arr2.myForEach((value, index, array) => {
  console.log(value, index, array);
});
