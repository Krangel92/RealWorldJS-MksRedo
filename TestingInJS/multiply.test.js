const multiply = require("./multiply.js");

describe("multiply", () => {
	it("multiplies 2 and 2", () => {
		expect(2 * 2).toBe(4);
	});
	it("multiplies 3 and 2", () => {
		expect(3 * 2).toBe(6);
	});
});
