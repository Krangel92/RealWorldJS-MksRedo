const searchCandies = require("./searchCandies.js");

describe("searchCandies", () => {
	it("returns a list of candy names (lowercased) that start with the searchStr (lowercased) and candy price is less than maxPrice", () => {
		expect(searchCandies("Ma", 10)).toEqual(["Mars", "Maltesers"]);
	});
	it("returns a list of candy names (lowercased) that start with the searchStr (lowercased) and candy price is less than maxPrice", () => {
		expect(searchCandies("Ma", 2)).toEqual(["Mars"]);
	});
});
