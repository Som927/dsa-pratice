const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");
const value1 = myMap.get("key1");
console.log(value1); // 'value1'

const value2 = myMap.get("key2");
console.log(value2); // 'value2'
console.log(myMap.has("key1")); // true
console.log(myMap.has("key4")); // false
myMap.delete("key2");
console.log(myMap.has("key2")); // false
myMap.forEach((value, key) => {
  console.log(key, value);
});
// Output:
// 'key1' 'value1'
// 'key3' 'value3'
myMap = new Map();

// Adding key-value pairs
myMap.set("id1", { name: "Alice", age: 25 });
myMap.set("id2", { name: "Bob", age: 30 });
myMap.set("id3", { name: "Charlie", age: 35 });

// Getting a value by key
const user = myMap.get("id2");
console.log(user); // { name: 'Bob', age: 30 }

// Checking if a key exists
console.log(myMap.has("id1")); // true
console.log(myMap.has("id4")); // false

// Deleting a key-value pair
myMap.delete("id3");
console.log(myMap.has("id3")); // false

// Iterating over the map
myMap.forEach((value, key) => {
  console.log(key, value);
});
// Output:
// 'id1' { name: 'Alice', age: 25 }
// 'id2' { name: 'Bob', age: 30 }
