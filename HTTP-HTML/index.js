console.log("hello");

// const button = document.querySelectorAll("button");
// console.log(button);

// function foo() {
//   console.log(this);
// }

// foo();

const root = document.querySelector("#root");
const ul = document.querySelector("ul");
const li = document.querySelector("li");

console.log(root);

const listener = (event) => {
  console.log(event.currentTarget);
  alert(`${event.currentTarget.tagName} is clicked`);
};

root.addEventListener("click", listener);
// ul.addEventListener("click", listener);
// li.addEventListener("click", listener);
