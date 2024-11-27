// Exercise (instructions):
// Write tests for the fizzBuzz function. Use Jest's describe and it syntax, jets matchers (expect() and toBe())
// and use module.exports and require to import the fizzBuzz function in the test file.
// To see if the test pass, run 'Jest' in the command line.

const fizzBuzz = require("./fizzBuzz.js");

describe("fizzBuzz", () => {
	it("returns 'Fizz' when the num is divisible by 3", () => {
		expect(fizzBuzz(3)).toBe("Fizz");
	});
	it("returns 'Buzz' when the num is divisible by 5", () => {
		expect(fizzBuzz(5)).toBe("Buzz");
	});
	it("returns num when the num is not divisble by 3 and/or 5", () => {
		expect(fizzBuzz(8)).toBe(8);
	});
	it("returns 'FizzBuzz' when the num is divisible by 3 and 5", () => {
		expect(fizzBuzz(15)).toBe("FizzBuzz");
	});
	it("returns 'Fizz' when the num is divisible by 3", () => {
		expect(fizzBuzz(18)).toBe("Fizz");
	});
	it("returns 'Buzz' when the num is divisble by 5", () => {
		expect(fizzBuzz(20)).toBe("Buzz");
	});
});
