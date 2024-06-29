let arr = new Array(5);
// will create 5 empty items
console.log("Array : " + arr);

// fill data
let arr1 = new Array(5).fill(false);
// will create 5 empty items
console.log("Array : " + arr1);

// push(element1, ..., elementN):

// Description: Adds one or more elements to the end of an array and returns the new length of the array.
// Example:

let arr2 = [1, 2, 3];
arr2.push(4);
console.log(arr2); // Output: [1, 2, 3, 4]

// pop():

// Description: Removes the last element from an array and returns that element.
// Example:

let arr3 = [1, 2, 3];
let lastElement = arr3.pop();
console.log(arr3); // Output: [1, 2]
console.log(lastElement); // Output: 3

// shift():

// Description: Removes the first element from an array and returns that element.
// Example:

let arr4 = [1, 2, 3];
let firstElement = arr4.shift();
console.log(arr4); // Output: [2, 3]
console.log(firstElement); // Output: 1

// unshift(element1, ..., elementN):

// Description: Adds one or more elements to the beginning of an array and returns the new length of the array.
// Example:

let arr5 = [1, 2, 3];
arr5.unshift(0);
console.log(arr5); // Output: [0, 1, 2, 3]

// concat(array2, ..., arrayN):

// Description: Merges two or more arrays and returns a new array.
// Example:

let arr6 = [1, 2];
let arr7 = [3, 4];
let arr8 = arr6.concat(arr7);
console.log(arr8); // Output: [1, 2, 3, 4]

// join(separator):

// Description: Joins all elements of an array into a string.
// Example:

let arr9 = [1, 2, 3];
let str = arr9.join("-");
console.log(str); // Output: "1-2-3"

// slice(start, end):

// Description: Returns a shallow copy of a portion of an array into a new array object.
// Example:

let arr10 = [1, 2, 3, 4, 5];
let slicedArr = arr10.slice(1, 3);
console.log(slicedArr); // Output: [2, 3]

// splice(start, deleteCount, item1, ..., itemN):

// Description: Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// Example:

let arr11 = [1, 2, 3, 4, 5];
arr11.splice(2, 1, "a", "b");
console.log(arr11); // Output: [1, 2, 'a', 'b', 4, 5]

// indexOf(searchElement, fromIndex):

// Description: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Example:

let arr12 = [1, 2, 3, 2];
console.log(arr12.indexOf(2)); // Output: 1

// lastIndexOf(searchElement, fromIndex):

// Description: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
// Example:

let arr13 = [1, 2, 3, 2];
console.log(arr13.lastIndexOf(2)); // Output: 3

// forEach(callback):

// Description: Executes a provided function once for each array element.
// Example:

let arr14 = [1, 2, 3];
arr14.forEach((element) => console.log(element));
// Output:
// 1
// 2
// 3

// map(callback):

// Description: Creates a new array with the results of calling a provided function on every element in the calling array.
// Example:

let arr15 = [1, 2, 3];
let mappedArr = arr15.map((element) => element * 2);
console.log(mappedArr); // Output: [2, 4, 6]

// filter(callback):

// Description: Creates a new array with all elements that pass the test implemented by the provided function.
// Example:

let arr16 = [1, 2, 3, 4];
let filteredArr = arr16.filter((element) => element > 2);
console.log(filteredArr); // Output: [3, 4]

// reduce(callback, initialValue):

// Description: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
// Example:

let arr17 = [1, 2, 3, 4];
let sum = arr17.reduce((acc, element) => acc + element, 0);
console.log(sum); // Output: 10

// reduceRight(callback, initialValue):

// Description: Applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.
// Example:

let arr18 = [1, 2, 3, 4];
let sum1 = arr18.reduceRight((acc, element) => acc + element, 0);
console.log(sum1); // Output: 10

// some(callback):

// Description: Tests whether at least one element in the array passes the test implemented by the provided function.
// Example:

let arr19 = [1, 2, 3];
let hasEven = arr19.some((element) => element % 2 === 0);
console.log(hasEven); // Output: true

// every(callback):

// Description: Tests whether all elements in the array pass the test implemented by the provided function.
// Example:

let arr20 = [1, 2, 3];
let allEven = arr20.every((element) => element % 2 === 0);
console.log(allEven); // Output: false

// find(callback):

// Description: Returns the value of the first element in the array that satisfies the provided testing function.
// Example:

let arr21 = [1, 2, 3];
let foundElement = arr21.find((element) => element > 1);
console.log(foundElement); // Output: 2

// findIndex(callback):

// Description: Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1.
// Example:

let arr22 = [1, 2, 3];
let foundIndex = arr22.findIndex((element) => element > 1);
console.log(foundIndex); // Output: 1

// sort(compareFunction):

// Description: Sorts the elements of an array in place and returns the sorted array.
// Example:

let arr23 = [3, 1, 4, 2];
arr23.sort((a, b) => a - b);
console.log(arr23); // Output: [1, 2, 3, 4]

// reverse():

// Description: Reverses the order of the elements in an array in place.
// Example:

let arr24 = [1, 2, 3];
arr24.reverse();
console.log(arr); // Output: [3, 2, 1]

// fill(value, start, end):

// Description: Fills all the elements of an array from a start index to an end index with a static value.
// Example:

let arr25 = [1, 2, 3, 4];
arr25.fill(0, 1, 3);
console.log(arr25); // Output: [1, 0, 0, 4]

// copyWithin(target, start, end):

// Description: Shallow copies part of an array to another location in the same array and returns it without modifying its length.
// Example:

let arr26 = [1, 2, 3, 4, 5];
arr26.copyWithin(0, 3, 4);
console.log(arr); // Output: [4, 2, 3, 4, 5]

// flat(depth):

// Description: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Example:

let arr27 = [1, [2, [3, [4, 5]]]];
console.log(arr27.flat(2)); // Output: [1, 2, 3, [4, 5]]

// flatMap(callback):

// Description: First maps each element using a mapping function, then flattens the result into a new array.
// Example:

let arr28 = [1, 2, 3];
let flatMappedArr = arr28.flatMap((x) => [x, x * 2]);
console.log(flatMappedArr); // Output: [1, 2, 2, 4, 3, 6]
