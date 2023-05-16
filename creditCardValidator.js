// Algorithm Notes
//=================

// Double every other digit
// Add digits of double digit numbers ex. 16 becomes 1 + 6 become 7 
// Add all numbers together
// Check that added numbers last digit is a zero
// if last digit equals zero print valid else print false

// Test Numbers
// Valid: 4102080860435620
// Invalid: 4102080880435620

//Business Logic
//==============================================================================


// ================================================
//               Fundamentals Solution
// ================================================

function luhnsAlgorithmFundamentals(cardNumberString) {
  // Split card number string in an array to loop over
  let cardNumArr = cardNumberString.split("");

  // Double every other digit and add together those over 9
  let processedCardNumbers = [];
  for (let i = 0; i <= cardNumArr.length - 1; i++) {
    // Use modulo to seperate logic based on even and odd indexes 
    if (i % 2 !== 0) {
      const num = cardNumArr[i] * 2;
      // Check if number is double digit or not and add digits together if it is
      if (num.toString().length > 1) {
        let numString = num.toString();
        let numArr = numString.split("");
        processedCardNumbers.push(parseInt(numArr[0]) + parseInt(numArr[1]));
      } else {
        processedCardNumbers.push(num);
      }
    } else {
      processedCardNumbers.push(cardNumArr[i]);
    }
  }

  // Add all processed card numbers together
  let summedCardNumbers = 0;
  for(let i = 0; i <= processedCardNumbers.length - 1; i++) {
    summedCardNumbers += parseInt(processedCardNumbers[i]);
  }

  // Return result based on summedCardNumbers
  let summedCardNumbersString = summedCardNumbers.toString()
  if (summedCardNumbersString[summedCardNumbersString.length - 1] === "0") {
    return "This card number is valid.";
  } else {
    return "This card number is not valid.";
  }
}

// ================================================
//                Advanced Solution
// ================================================

const addSequentialDigitsAdvanced = (num) => {
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
      return (doubledDigit > 9) ? addSequentialDigitsAdvanced(doubledDigit) : doubledDigit;
    }
  });

  // Sum processed digits
	let summedDigitsString = cardNumProcessedDigits.reduce((sum, num) => sum + num).toString();

  // Return result based on summedDigitsString
  return (summedDigitsString[summedDigitsString.length - 1] === "0") ?  "This card number is valid." : "This card number is not valid.";
}

// Valid result expected
console.log(luhnsAlgorithmFundamentals("4102080860435620"));
// Invalid result expected
console.log(luhnsAlgorithmFundamentals("4102080880435620"));


// UI Logic
//==============================================================================
// const cardNumber = window.prompt("Enter a credit card number: ");
// window.alert(luhnsAlgorithmAdvanced(cardNumber));