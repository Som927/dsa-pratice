const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); // Output: ['a', 'b', 'c']
obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // Output: [1, 2, 3]
obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // Output: [['a', 1], ['b', 2], ['c', 3]]
const target = { a: 1 };
const source = { b: 2, c: 3 };
const result = Object.assign(target, source);
console.log(result); // Output: { a: 1, b: 2, c: 3 }
obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // Does nothing
console.log(obj.a); // Output: 1
obj = { a: 1 };
Object.seal(obj);
obj.a = 2; // Allowed
delete obj.a; // Not allowed
obj.b = 3; // Not allowed
console.log(obj); // Output: { a: 2 }
const proto = { a: 1 };
const obj = Object.create(proto);
console.log(obj.a); // Output: 1


//

const obj = {};
Object.defineProperty(obj, 'a', {
  value: 1,
  writable: false
});
obj.a = 2; // Does nothing
console.log(obj.a); // Output: 1

//

const obj = {};
Object.defineProperties(obj, {
  'a': {
    value: 1,
    writable: true
  },
  'b': {
    value: 2,
    writable: false
  }
});
console.log(obj.a); // Output: 1
console.log(obj.b); // Output: 2

//

 proto = {};
const obj = Object.create(proto);
console.log(Object.getPrototypeOf(obj) === proto); // Output: true


// 

 proto = {};
const obj = {};
Object.setPrototypeOf(obj, proto);
console.log(Object.getPrototypeOf(obj) === proto); // Output: true


//

const person = {
  name: 'John',
  age: 30,
  greet() {
    console.log('Hello!');
  }
};

// Using Object.keys
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'greet']

// Using Object.values
const values = Object.values(person);
console.log(values); // ['John', 30, function greet() { ... }]

// Using Object.entries
const entries = Object.entries(person);
console.log(entries); // [['name', 'John'], ['age', 30], ['greet', function greet() { ... }]]

// Using Object.assign
const additionalInfo = { job: 'Developer', country: 'USA' };
const merged = Object.assign({}, person, additionalInfo);
console.log(merged); // { name: 'John', age: 30, greet: [Function: greet], job: 'Developer', country: 'USA' }

// Using Object.freeze
Object.freeze(person);
person.age = 31; // Does nothing
console.log(person.age); // 30

// Using Object.create
const newPerson = Object.create(person);
console.log(newPerson.name); // 'John'
