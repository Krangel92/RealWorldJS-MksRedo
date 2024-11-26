// Exercise (instructions):
// test-drive a function called add which will take two numbers calculate their sum.

// Bellow is the basic syntax for a test, using the describe function:
describe("add", () => {});

// When writing tests, we need to think what is it we want to test or verify. If we wanted to see in the REPL if the 'add' function is working
// we'd type: add(2,2) and this'd return 4.
// to translate it into a proper test case we use the 'it' function and use Jest matchers (expect().toBe() ):

const add = require("./add.js");

describe("add", () => {
	it("adds 2 and 2", () => {
		expect(2 + 2).toBe(4);
	});
	it("adds 0 and 5", () => {
		expect(0 + 5).toBe(5);
	});
});

// Exercise: write/implement the function 'add' into file add.js to satisfy the test above. Export the add function & require it in add.test.js (line 11).
//           To see if the test pass, run 'Jest' in the command line.
