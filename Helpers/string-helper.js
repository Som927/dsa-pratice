// 1. Using a for loop (JavaScript)

let str1 = "Hello, World!";
for (let i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

// 2. Using a for...of loop (JavaScript)

let str2 = "Hello, World!";
for (let char of str2) {
  console.log(char);
}

// 3. Using forEach with Array.from (JavaScript)

let str3 = "Hello, World!";
Array.from(str3).forEach((char) => {
  console.log(char);
});

// 4. Using a while loop (JavaScript)

let str4 = "Hello, World!";
let i = 0;
while (i < str4.length) {
  console.log(str4[i]);
  i++;
}

// charAt(index):

// Description: Returns the character at the specified index.
// Example:

let str5 = "Hello";
console.log(str5.charAt(0)); // Output: "H"

// charCodeAt(index):

// Description: Returns the Unicode of the character at the specified index.
// Example:

let str6 = "Hello";
console.log(str6.charCodeAt(0)); // Output: 72

// concat(string2, string3, ..., stringN):

// Description: Joins two or more strings and returns a new string.
// Example:

let str7 = "Hello";
let str8 = "World";
console.log(str7.concat(" ", str8)); // Output: "Hello World"

// includes(searchString, position):

// Description: Checks if a string contains another string.
// Example:

let str9 = "Hello World";
console.log(str9.includes("World")); // Output: true

// endsWith(searchString, length):

// Description: Checks if a string ends with another string.
// Example:

let str10 = "Hello World";
console.log(str10.endsWith("World")); // Output: true

// indexOf(searchValue, fromIndex):

// Description: Returns the index of the first occurrence of a value in a string.
// Example:

let str11 = "Hello World";
console.log(str11.indexOf("o")); // Output: 4

// lastIndexOf(searchValue, fromIndex):

// Description: Returns the index of the last occurrence of a value in a string.
// Example:

let str12 = "Hello World";
console.log(str12.lastIndexOf("o")); // Output: 7

// match(regex):

// Description: Matches a string against a regular expression.
// Example:

let str13 = "The rain in SPAIN stays mainly in the plain";
console.log(str13.match(/ain/g)); // Output: ["ain", "ain", "ain"]

// replace(searchValue, newValue):

// Description: Replaces a specified value with another value in a string.
// Example:

let str14 = "Hello World";
console.log(str14.replace("World", "Universe")); // Output: "Hello Universe"

// search(regex):

// Description: Searches a string for a value matching a regular expression and returns the index of the match.
// Example:

let str15 = "Hello World";
console.log(str15.search("World")); // Output: 6

// slice(start, end):

// Description: Extracts a part of a string and returns it as a new string.
// Example:

let str16 = "Hello World";
console.log(str16.slice(0, 5)); // Output: "Hello"

// split(separator, limit):

// Description: Splits a string into an array of substrings.
// Example:

let str17 = "Hello World";
console.log(str17.split(" ")); // Output: ["Hello", "World"]

// startsWith(searchString, position):

// Description: Checks if a string starts with another string.
// Example:

let str18 = "Hello World";
console.log(str18.startsWith("Hello")); // Output: true

// substring(start, end):

// Description: Extracts the characters from a string between two specified indices.
// Example:

let str19 = "Hello World";
console.log(str19.substring(0, 5)); // Output: "Hello"

// toLowerCase():

// Description: Converts a string to lowercase letters.
// Example:

let str20 = "Hello World";
console.log(str20.toLowerCase()); // Output: "hello world"

// toUpperCase():

// Description: Converts a string to uppercase letters.
// Example:

let str21 = "Hello World";
console.log(str21.toUpperCase()); // Output: "HELLO WORLD"

// trim():

// Description: Removes whitespace from both ends of a string.
// Example:

let str22 = "   Hello World   ";
console.log(str22.trim()); // Output: "Hello World"

// repeat(count):

// Description: Returns a new string with a specified number of copies of the original string.
// Example:

let str23 = "Hello";
console.log(str23.repeat(3)); // Output: "HelloHelloHello"

// padStart(targetLength, padString):

// Description: Pads the current string with another string (repeated, if needed) so that the resulting string reaches a given length.
// Example:

let str24 = "5";
console.log(str24.padStart(2, "0")); // Output: "05"

// padEnd(targetLength, padString):

// Description: Pads the current string with another string (repeated, if needed) so that the resulting string reaches a given length.
// Example:

let str25 = "5";
console.log(str25.padEnd(2, "0")); // Output: "50"
