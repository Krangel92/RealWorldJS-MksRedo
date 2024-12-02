const searchCandies = require("./searchCandies.js");

describe("searchCandies", () => {
	it("checks array, converts to lowercase the candy name and provided searchStr and returns a list of candy names that start the searchStr and candy price is less than maxPrice", () => {
		expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
	});
});
