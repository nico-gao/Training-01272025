let number: number = 1;
let str: string = "1";
let bool: boolean = true;
let u: undefined = undefined;
let n: null = null;

// array
let numberArr: number[] = [1, 2, 3];
let strArr: string[] = ["1", "2", "3"];

// object

// anonymous
let person: { name: string; id: number } = {
  name: "alice",
  id: 1,
};

// type alias
type Person = { name: string; id: number };

let person2: Person = {
  name: "bob",
  id: 2,
};

// interface
interface IPerson {
  name: string;
  id: number;
}

type Name = string;

let studentName: Name = "charlie";

// function

function add(x: number, y: number): number {
  return x + y;
}

const add2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

type AddFn = (x: number, y: number) => number;

const add3: AddFn = (x, y) => x + y;

// union type
type Person2 = { name: string; id: number | string };

let person3: Person2 = {
  name: "alice",
  id: "2",
};

// literal type
type Direction = "north" | "south" | "east" | "west";
let direction: Direction = "east";

// extend from another type
type Student = Person2 & {
  studentId: number;
};

let student: Student = {
  name: "alice",
  id: 2,
  studentId: 1,
};

interface IStudent extends IPerson {
  studentId?: number;
}

let student2: IStudent = {
  name: "alice",
  id: 2,
};

// any - disable typescript
// unknown - the data can be anything, but you need to do some type checking

function foo(data: unknown) {
  // data.forEach(()=>{})
  // if (typeof data === "string"){
  // }
  // if (typeof data === "number"){
  // }
}

// generic type
function toNumberArr(x: number, y: number) {
  return [x, y];
}

function toStrArr(x: string, y: string) {
  return [x, y];
}

function toArr<T>(x: T, y: T): T[] {
  return [x, y];
}

toArr(1, 2);
toArr<string | number>(1, 2);
toArr(true, false);

// tuple - an array with defined length and type of the elements
let arr: [number, number, string] = [1, 2, "3"];
