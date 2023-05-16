// Double every other digit
// Add digits of double digit numbers ex. 16 becomes 1 + 6 become 7 
// Add all numbers together
// Check that added numbers last digit is a zero
// if last digit equals zero print valid else print false

// Test Numbers
// Valid: 4102080860435620
// Invalid: 4102080880435620

const addSequentialDigits = (num) => {
	return num.toString().split("").map(e => parseInt(e)).reduce((sum, num) => sum + num);
}

const luhnsAlgorithmAdvanced = (cardNumberString) => {
	//Split digits into an array and parse them into numbers from string
	let cardNumArr = cardNumberString.split("").map(e => parseInt(e));

  let cardNumProcessedDigits = cardNumArr.map((e, index) => {
  	// Double every other digit
    if (index % 2 === 0) {
      return e;
    } else {
    	let doubledDigit = e * 2;
      // Check if doubled number is a double digit number and add them if they are
      return (doubledDigit > 9) ? addSequentialDigits(doubledDigit) : doubledDigit;
    }
  });

  // Sum processed digits
	let summedDigitsString = cardNumProcessedDigits.reduce((sum, num) => sum + num).toString();

  // Return result based on summedDigitsString
  return (summedDigitsString[summedDigitsString.length - 1] === "0") ?  "This card number is valid." : "This card number is not valid.";
}

// Valid result expected
// console.log(luhnsAlgorithmAdvanced("4102080860435620"));
// Invalid result expected
// console.log(luhnsAlgorithmAdvanced("4102080880435620"));

const cardNumber = window.prompt("Enter a credit card number: ");
window.alert(luhnsAlgorithmAdvanced(cardNumber));