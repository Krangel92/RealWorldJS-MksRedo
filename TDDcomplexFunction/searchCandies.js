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
	return candies
		.filter(
			(candy) =>
				candy.name.toLowerCase().startsWith(searchStr.toLowerCase()) &&
				candy.price < maxPrice
		)
		.map((candy) => candy.name);
};

console.log(searchCandies("Ma", 10)); // [ 'Mars', 'Maltesers' ]
console.log(searchCandies("Ma", 2)); // [ 'Mars' ]
console.log(searchCandies("S", 10)); // [ 'Skitties', 'Skittles', 'Starburst' ]
console.log(searchCandies("S", 4)); // [ 'Skitties', 'Skittles' ]
console.log(searchCandies("ma", 10)); // [ 'Mars', 'Maltesers' ]
