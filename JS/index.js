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
function add() {
  let count = 0;
  return function () {
    count += 1;
    console.log(count);
  };
}

const returnedFn = add();
returnedFn();
returnedFn();
