/**
 * GET | POST | PUT | PATCH | DELETE
 * GET: get data from server
 * POST: send data to server
 * PUT/PATCH: update the entire data object/update certain fields
 * DELETE: remove data
 *
 * Status code:
 *
 * 100 - informational response
 * 200 - success
 * 300 - redirection
 * 400 - client error
 * 500 - server error
 *
 * DOM (traversal, manipulation)
 * tree structure
 * topmost tree nodes: html, body, head
 * children: direct children, descendents
 * siblings and parents
 *
 * ECMAScript 2015 (es6): syntax standard for javascript
 * Javascript in browser: ECMAScript + WebAPI
 * Javacript in node: ECMAScript + NodeAPI
 */

/**
 * Critical rendering path
 * The steps that your browser will take to render a webpage
 *
 * 1. parse the HTML, build DOM
 * 2. parsing CSS, build CSSOM
 * 3. combine DOM and CSSOM, create the render tree
 * 4. layout calculation
 * 5. painting
 */

/**
 * attribute
 * information about the tag
 *
 *
 * semantic tags
 * for better readibility, accessibility, SEO
 *
 *
 * SVG
 * <svg> <img>
 *
 *
 * meta tags
 * provide metadata about the web page for browsers and search engines
 *
 *
 * HTML 5 features
 * <article> <section> <nav> <aside> <audio> <video>
 * session storage, local storage
 *
 *
 * critical rendering path
 * performance optimization
 *
 *
 * CSS
 * . # * attribute[] media query combination ::
 *
 *
 * CSS specificity
 * inline: 1000
 * id: 100
 * class: 10
 * tag name: 1
 *
 *
 * box model
 * defines how elements are structured, margin, border, padding, content
 *
 * box sizing, default to content box
 * usually use border box
 *
 *
 * hide elements
 * display: none
 * visibility: hidden
 * opacity: 0
 *
 *
 * CSS positions
 * 
 * static
 * relative
 * absolute
 * fixed
 * sticky
 *
 * 
 * responsive design
 * flexbox, gird, media query
 * 
 * 
 * flexbox vs grid
 * 
 * 
 * JS
 * 
 * primitive data types (pass by value)
 * number, string, boolean, null, undefined, bigint, symbol
 * 
 * 
 * non-primitive (pass by reference)
 * array, object, function
 * const a = [1,2,3]
   const b = a;
   a === b => true
 * 

 * undefined vs null vs not defined
 * undefined: a variable has been declared, but not assigned with any value
 * null: explicitly set to be empty
 * not defined: reference error, the variable is not declared
 * 
 * console.log(a) -> undeclared -> reference error
 * 
 * 
 * closure
 * an inner function has the access to the outer function scope
 * 
 * function a (){
 *  let obj = {}
 *  function b(){
 *    obj.name
 *    let obj2 = {}
 *  }
 * }
 * 
 * 
 * type coercion
 * implicit
 * 1 == "1" -> true, convert into the same type, and then compare
 * 1 === "1": strict comparison, false, use this 99% of the time
 * 
 * explicit
 * toString()
 * parseInt()
 * Number()
 * String()
 * Boolean()
 * + -> convert into number
 * 
 * 
 * execution context
 * it's about the context where the function or variable are executed
 * global: by default where the script runs
 * function: created when a function is invoked
 * 
 * 
 * What is hoisting in javascript? (var, function)
 * moves the declaration of variables to the top
 * 
 * 
 * Difference between var, let and const?
                     var    |   let   |   const
// scope:        function       block     block
// hoisting:       yes           no         no
// redeclare:      yes           no         no
// reassign:       yes           yes        no
 * 
 * 
 * 
 * What is a js module and why do we use it? CommonJS vs ES module
 * CommonJS (NodeJS): module.exports = { foo }, const foo = require("./foo.js")
 * ES module (the newer one, browser, modern JS): export foo, import {foo} from "./foo.js"
 * 
 * 
 * What are scopes?
 * Block vs function scope vs global
 * block: accessible inside {}
 * function: accessible inside a function
 * global: accessible anywhere
 * 
 * determines what variables are accessible
 * // global
 * 
 * let b = 2
if (true){
  // block scope
  let a = 1;
  console.log(b)
}

console.log(a);
 * 
 */

/** assignment: use your own words to answer these questions
What are lexical scope and closure in javascript? What is Immediately Invoked Functions(IIFE) What is a callback function?
What are higher order functions?
What is prototype?
What is this keyword?
Explain call, apply, and bind method
Why do we use arrow functions? What is the event loop?
What is a Promise?
What is a REST API?
What is the difference between local storage, session storage and cookies? What are HTTP methods?
 * 
 * 
 */
