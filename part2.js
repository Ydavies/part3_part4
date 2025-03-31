// We are setting the string values
let myString = "this is a string!";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "My name is Hiro";

console.log(myString);
console.log(anotherString);
console.log(hello);
console.log(myName);

// Here we are using the length property to display the string length
let length = myString.length;
console.log(length);

// Using the charAt() method to display the first character in the string
let char0 = myString.charAt(0);
console.log(char0);

// using same method as above but changing the value we are searching for
let char11 = myString.charAt(10);
console.log(char11);

// using slice to get value from myString
let slice1 = myString.slice(5, 9);
console.log(slice1);

// using subString to get value from myString
let subString1 = myString.substring(12, 5);
console.log(subString1);

// using upperCase to change text to uppercase
let upperCase = myName.toUpperCase();
console.log(upperCase);

// using lowerCase to change text to lowercase
let lowerCase = myName.toLowerCase();
console.log(lowerCase);

// Join hello string and myName string
let joinString = hello.concat(myName);
console.log(joinString);

// Remove the space from the string using trim
let removeSpace = anotherString.trim();
console.log(removeSpace);
