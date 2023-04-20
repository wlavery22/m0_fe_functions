// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion()
// I added a semicolon at the end of the 2nd line, or line 12. It works either way in replit, but it's a best practice to do it.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
  console.log(sum);
      }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
// I added a semicolon after the 2nd line, or line 20. It works either way in replit, but it's a good habit. I also indented the 2nd and 3rd
// lines one tab in, again it works either way, but that's how it is in the examples given.

// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    }

makeFreshPesto();
// The 1st word "func", should be "function". It doesn't run in replit this way. There is also a space missing between the parentheses and 
// the curly brackets. 

//  EX 4:
function average(num1, num2) 
  {
var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}.`);
  }
  console.log(average(10, 8));
  // There was a semicolon missing from the last line. Just before that, the period was after the last backtick and it should've been before.
  // I added line 49 so that I could test it in replit and it worked.