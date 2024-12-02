// Exercise (instructions):
// Write a function searchCandies that takes the following two arguments: a search string and a maximum price — and returns only the names of candies matching these criteria:
//   - the candy name starts by the search string
//   - the candy price is less than the maximum price

// I am given the following array of objects, each object has two properties, name and price:
const candies = [
	{ name: "Aero", price: 1.99 },
	{ name: "Skitties", price: 2.99 },
	{ name: "Mars", price: 1.49 },
	{ name: "Maltesers", price: 3.49 },
	{ name: "Skittles", price: 1.49 },
	{ name: "Starburst", price: 5.99 },
	{ name: "Ricola", price: 1.99 },
	{ name: "Polkagris", price: 5.99 },
	{ name: "Pastila", price: 4.99 },
	{ name: "Mentos", price: 8.99 },
	{ name: "Raffaello", price: 7.99 },
	{ name: "Gummi bears", price: 10.99 },
	{ name: "Fraise Tagada", price: 5.99 },
];

const searchCandies = (searchStr, maxPrice) => {
	return (
		candies
			// .filter() is called on the candies array. It processes each candy in the array and keeps only those that meet both conditions defined in the callback function.
			.filter(
				// (candy) => is the callback function provided to .filter(). Each candy is an object (e.g., { name: "Mars", price: 1.49 }) from the candies array.
				(candy) =>
					// Converts the candy name & search string to lowercase to make the search case-insensitive. Checks if the candy's name starts with the provided searchStr.
					candy.name.toLowerCase().startsWith(searchStr.toLowerCase()) &&
					// Checks if price of the candy is less than maxPrice, && means both conditions must be true.
					candy.price < maxPrice
			) // After filtering, only candies that: Start with searchStr, and  Have a price below maxPrice are kept in the resulting array. At this stage, I'd get, ex:  [ { name: 'Mars', price: 1.49 }, { name: 'Maltesers', price: 3.49 } ]
			// .map() transforms the filtered array. For each candy in the filtered array, .map() extracts and returns only the name property.
			.map((candy) => candy.name)
	);
};

console.log(searchCandies("Ma", 10)); // [ 'Mars', 'Maltesers' ]
console.log(searchCandies("Ma", 2)); // [ 'Mars' ]
console.log(searchCandies("S", 10)); // [ 'Skitties', 'Skittles', 'Starburst' ]
console.log(searchCandies("S", 4)); // [ 'Skitties', 'Skittles' ]
console.log(searchCandies("ma", 10)); // [ 'Mars', 'Maltesers' ]

module.exports = searchCandies;
