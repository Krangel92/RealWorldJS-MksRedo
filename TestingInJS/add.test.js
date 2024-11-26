// Exercise (instructions):
// test-drive a function called add which will take two numbers calculate their sum.

// Bellow is the basic syntax for a test, using the describe function:
describe("add", () => {});

// When writing tests, we need to think what is it we want to test or verify. If we wanted to see in the REPL if the 'add' function is working
// we'd type: add(2,2) and this'd return 4.
// to translate it into a proper test case we use the 'it' function:

describe("add", () => {
	it("adds 2 and 2", () => {
		expect(2 + 2).toBe(4);
	});
});
