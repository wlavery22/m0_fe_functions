// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting() {
    console.log("Hi, how are you?");
}
printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function printGreeting(name) {
    console.log(`Hi, how are you ${name}?`);
}
printGreeting("Tito");

// 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will 
// represent the minimum and maximum of a pay range for a posted job. The function should print out a sentence that includes the name of the 
// company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
function jobListing(maxSalary, minSalary) {
    var sum = maxSalary - minSalary;
    return sum;
}

var maxSalary = 100000;
var minSalary = 80000;
var salaryRange = (maxSalary - minSalary);

console.log(`Initech offers job with salary range of ${salaryRange}`);

jobListing(100000, 80000);

// 4: Write a function that satifies the following interaction pattern:

checkStock(4, "Coffee");
// => "Coffee is stocked"
function checkStock(quantity, item) {
    console.log("Coffee is stocked");
}
checkStock(4, "Coffee");

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"
function checkStock(quantity, item) {
    console.log("Tortillas - running LOW");
}
checkStock(3, "Tortillas");

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"
function checkStock(quantity, item) {
    console.log("Cheese - OUT of stock!");
}
checkStock(0, "Cheese");

checkStock(1, "Salsa");
// => "Salsa - running LOW"
function checkStock(quantity, item) {
    console.log("Salsa - running LOW")
}
checkStock(1, "Salsa");
  