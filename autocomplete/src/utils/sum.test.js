import sum, { a as b, foo } from "./sum";

/* 
    module system:
        esmodule(es6): import export
        common.js(node.js): require, exports, module.export
        system.js
        ...
*/

test("1 plus 2 equals to 3", () => {
    expect(sum(1, 2)).toBe(3);
});

test("2 plus 3 equals to 5", () => {
    expect(sum(3, 2)).toBe(5);
});
