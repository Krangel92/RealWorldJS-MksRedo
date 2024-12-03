// These are methods that can loop through an array:
//      filter(), map(), reduce(), find(), sort()

// With an ex, we'll see how to chain the array methods together:
// Example (instructions):
//  1. Filter those elements whose price is greater than 100 using filter() method.
//  2. Map those elements to a new array with a new sale price(50% off).

const products = [
	{ name: "dress", price: 600 },
	{ name: "cream", price: 60 },
	{ name: "book", price: 200 },
	{ name: "bottle", price: 50 },
	{ name: "bedsheet", price: 350 },
];

const filtered = products.filter((product) => product.price > 100);

const sale = filtered.map(
	(product) => `the ${product.name} is ${product.price / 2} dollars`
);

console.log(sale); // [
//     'the dress is 300 dollars',
//     'the book is 100 dollars',
//     'the bedsheet is 175 dollars'
//   ]
