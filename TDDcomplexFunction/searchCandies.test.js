const searchCandies = require("./searchCandies.js");

describe("searchCandies", () => {
	it("returns a list of candy names that start with the searchStr and candy price is less than maxPrice", () => {
		expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
	});
	it("returns a list of candy names that start with the searchStr and candy price is less than maxPrice", () => {
		expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
	});
	it("returns a list of candy names that start with the searchStr and candy price is less than maxPrice", () => {
		expect(searchCandies("S", 10)).toEqual([
			"Skitties",
			"Skittles",
			"Starburst",
		]);
	});
	it("returns a list of candy names that start with the searchStr and candy price is less than maxPrice", () => {
		expect(searchCandies("S", 4)).toEqual(["Skitties", "Skittles"]);
	});
	it("returns a list of candy names that start with the searchStr and candy price is less than maxPrice", () => {
		expect(searchCandies("ma", 10)).toEqual(["Mars", "Maltesers"]);
	});
});
