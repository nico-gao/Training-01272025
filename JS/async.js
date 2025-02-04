// function foo() {
//   console.log(1);
// }

// foo();
// console.log(2);

// setTimeout(() => {
//   console.log(3);
// }, 0);

// Promise.resolve(1).then(() => console.log(4));

// console.log(5);

// event loop
// call stack - keep track of what is currently being executed
// webapi - async api, handle asynchronous operations, making sure it's non-block
// callback queue/task queue - maintain the async callbacks, when call stack is empty, it will push callbacks to call stack
// macrotask queue, microtask queue (higher priority to be executed)

console.log(1);

setTimeout(() => {
  console.log(2);
}, 0);

Promise.resolve().then(() => console.log(3));

setTimeout(() => {
  console.log(4);
}, 0);

Promise.resolve().then(() => setTimeout(() => console.log(5)));

console.log(6);

// function foo() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   }
// }

// foo();

// callback hell

// x = getData1();
// y = getData2(x);
// z = getData3(y);

// function getData1(cb) {
//   setTimeout(() => {
//     const data = "1st response";
//     cb(data);
//   }, 1000);
// }

// function getData2(cb) {
//   setTimeout(() => {
//     const data = "2nd response";
//     cb(data);
//   }, 1000);
// }

// function getData3(cb) {
//   setTimeout(() => {
//     const data = "3rd response";
//     cb(data);
//   }, 1000);
// }

// getData1((value) => {
//   console.log(value);
//   getData2((value2) => {
//     console.log(value2);
//     getData3((value3) => {
//       console.log(value3);
//     });
//   });
// });

// promise, async/await (ES6)

// pending, fulfilled, rejected

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("something wrong happened");
//     // resolve(1);
//   }, 1000);
// });

// console.log("before then");

// p.then(
//   (data) => {
//     console.log(data);

//   },
//   (err) => {
//     console.log("in .then", err);
//   }
// ).catch((err) => {
//   console.log(err);
// });
// console.log("after then");

// .then will alawys return a promise
// p.then((data) => {
//   console.log(data);
//   // return 2;
//   return Promise.resolve(2);
// })
//   .then((data2) => {
//     console.log(data2);
//   })
//   .finally(() => {
//     console.log("finally");
//   });

// async/await are syntax sugar of .then() and .catch()
// async function foo() { // an async function will alawys return a promise
//   try {
//     const p = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("something wrong happened");
//         // resolve(1);
//       }, 1000);
//     });
//     console.log(p);
//   } catch (err) {
//     console.log(err);
//   }
// }

// foo();

// async function getData(){
//   const data = await fetch('xxxxxxx');
//   return {
//     name: data.name,
//     age: data.age
//   }
// }

// getData().then(data=>{
//   console.log(data)
// })
