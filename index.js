const input = require('readline-sync');
let str = "LaunchCode";
let charHold = '';
let pig = '';
let num = 0;

//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
charHold = str.slice(0, 3);
pig = str.replace(charHold, '') + charHold;

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The pig latin for "${str}" is "${pig}", with a 3 letter offset.`);


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
num = Number(input.question('How many letters would you like to alter the word by?\n'));

charHold = str.slice(0, num);
pig = str.replace(charHold, '') + charHold;

console.log(`Your offset has turned "${str}"" into "${pig}".`);
//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
num = Number(input.question("Please enter another number, but this time I'll make sure the number you entered was no larger than 9:\n"));

if (num > 9) {
  charHold = str.slice(0, 3);
  pig = str.replace(charHold, '') + charHold;
  console.log(`Looks like you entered a number larger than 9. I've been told to use 3 in this case. The pig latin for "${str}" is "${pig}".`);
} else {
  charHold = str.slice(0, num);
  pig = str.replace(charHold, '') + charHold;
  console.log(`You entered ${num}, thank you! The pig latin of "${str}" with an offset of ${num} is "${pig}."`);
}