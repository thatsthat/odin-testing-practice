const { caesarCipher, analyzeArray } = require("./index.js");
const tF = require("./index.js");

test("adds 1 + 2 to equal 3", () => {
  expect(tF.sum(1, 2)).toBe(3);
});

test("makes first letter capital", () => {
  expect(tF.capitalize("hello World")).toMatch(/^Hello World$/);
});

test("reverse order of a string", () => {
  expect(tF.reverseString("hello World")).toMatch(/^dlroW olleh$/);
});

test("add two numbers", () => {
  expect(tF.calculator.add(1, 2)).toBe(3);
});

test("substract second number to first", () => {
  expect(tF.calculator.substract(1, 2)).toEqual(-1);
});

test("divide first over second", () => {
  expect(tF.calculator.divide(10, 2)).toBeCloseTo(5);
});

test("multiply two numbers", () => {
  expect(tF.calculator.multiply(5, 6)).toEqual(30);
});

test("apply caesar cypher", () => {
  expect(tF.caesarCipher("Iep iepz! . 99q", 1)).toMatch(/^Jfq jfqa! . 99r$/);
});

test("provide stats on an array of numbers", () => {
  expect(tF.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
