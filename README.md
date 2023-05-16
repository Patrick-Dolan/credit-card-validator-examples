# Credit Card Validator
#### by Patrick Dolan
#### A few examples of how I worked through and solved a practice problem to create a credit card validator using Luhns Algorithm  

## Technologies Used
* Javascript
* HTML

## Practice Problem
[Original Practice Problem](https://www.learnhowtoprogram.com/fidgetech-1-introduction-to-programming/1-3-arrays-looping/1-3-4-3-practice-credit-card-validator-roman-numerals-or-cryptosquare)

### The Problem

Write a program that checks if a credit card number is valid. I used Luhns algorithm which checks the digits of a number in order to validate it. For more information on Luhns algorithm you can view the wikipedia page [HERE](https://en.wikipedia.org/wiki/Luhn_algorithm) or go to the practice problem link above.

### My Solution/Process

The first thing I did to solve this problem was read through the steps of Luhns Algorithm carefully and write out what my function would need to do in a step by step fashion. I did this in my code editor as commented out code at the top of the file I was working in like so:

![Algorithm Summary Picture](https://raw.githubusercontent.com/Patrick-Dolan/credit-card-validator-examples/main/readme-pictures/solution-img-1.png)

Once I had these notes I slowly walked through my function coding each step and console logging along the way to make sure I had the correct output. The first function I made was the more advanced one because it was the one that came naturally to me but afterwards I chose to go back and make sure my understanding of the fundamental steps required were still sharp.

This is my function using the more foundational systems:

![Foundational Algorithm Function](https://raw.githubusercontent.com/Patrick-Dolan/credit-card-validator-examples/main/readme-pictures/solution-img-2.png)

This is my function using more advanced concepts like arrow notation, ternary expressions, map and reduce, etc:

![Foundational Algorithm Function](https://raw.githubusercontent.com/Patrick-Dolan/credit-card-validator-examples/main/readme-pictures/solution-img-3.png)

It felt right to split off the add sequential digits function into its own function and I think that even now I could potentially refactor the advanced form of the function to be more concise. That being said I did make a few specific decisions to make the function easier to read. The if else statement on line 74 being the biggest one; I could have made it a ternary expression too but it seems a lot easier to read in the usual if else format. 

I also may have been able to make the addSequentialDigitsAdvanced function serve both on line 79 and replace what is going on on line 84. I'm happy with how it functions at the moment though so I chose to stop at this point. 

## Setup/Installation Requirements
* _Download or Clone the repo down to your computer._
* _Navigate into the "credit-card-validator" directory you just downloaded and double click on the index.html to launch the webpage.
You will only be able to see results in the console and actually use the validator in the code.

## Contact Me

_Let me know if you run into any issues or have questions, ideas or concerns:_  
_dolanp1992@gmail.com_