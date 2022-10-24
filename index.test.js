const { caesarCipher } = require("./index.js");
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

test("multiply two numbers", () => {
  expect(caesarCipher("Iep iepz! . 99q", 1)).toMatch(/^Jfq jfqa! . 99r$/);
});
