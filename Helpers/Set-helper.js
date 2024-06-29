const mySet = new Set();
mySet.add(1);
mySet.add(5);
mySet.add("some text");
mySet.add({ a: 1, b: 2 });

console.log(mySet); // Set(4) { 1, 5, 'some text', { a: 1, b: 2 } }
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false
console.log(mySet.has("some text")); // true
console.log(mySet.has({ a: 1, b: 2 })); // false (different object reference)
mySet.delete(5);
console.log(mySet); // Set(3) { 1, 'some text', { a: 1, b: 2 } }
for (let item of mySet) {
  console.log(item);
}
// Output:
// 1
// 'some text'
// { a: 1, b: 2 }
mySet.forEach((item) => {
  console.log(item);
});
// Output:
// 1
// 'some text'
// { a: 1, b: 2 }
const myArray = Array.from(mySet);
console.log(myArray); // [1, 'some text', { a: 1, b: 2 }]
console.log(mySet.size); // 3
mySet.clear();
console.log(mySet.size); // 0
// Remove duplicate values from an array using Set
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers); // Set(5) { 1, 2, 3, 4, 5 }

// Convert back to an array
const uniqueArray = Array.from(uniqueNumbers);
console.log(uniqueArray); // [1, 2, 3, 4, 5]
mySet = new Set([1, 2, 3, 4, 5]);
const valueToFind = 3;
let foundValue = null;

for (let item of mySet) {
  if (item === valueToFind) {
    foundValue = item;
    break;
  }
}

console.log(foundValue); // 3

mySet = new Set([1, 2, 3, 4, 5]);
const arrayFromSet = Array.from(mySet);
const valueAtIndex = arrayFromSet[2]; // Getting the value at index 2

console.log(valueAtIndex); // 3

mySet.forEach((item) => {
  if (item === valueToFind) {
    foundValue = item;
  }
});

console.log(foundValue); // 3
mySet = new Set([1, 2, 3, 4, 5]);
const [first, second, third] = [...mySet];

console.log(third); // 3

const obj1 = { a: 1 };
const obj2 = { b: 2 };
mySet = new Set([obj1, obj2]);

valueToFind = obj1;
foundValue = null;

for (let item of mySet) {
  if (item === valueToFind) {
    foundValue = item;
    break;
  }
}

console.log(foundValue); // { a: 1 }
