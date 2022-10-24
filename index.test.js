const tF = require("./index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(tF.sum(1, 2)).toBe(3);
});

test("makes first letter capital", () => {
  expect(tF.capitalize("hello World")).toMatch(/^Hello World$/);
});

test("makes first letter capital", () => {
  expect(tF.reverseString("hello World")).toMatch(/^dlroW olleh$/);
});
