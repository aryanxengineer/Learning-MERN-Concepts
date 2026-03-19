"use strict";

// Core javascript
// 1. Arrow function lexically bind this -> arrow function ke andar ka this apne parent function ke behalf par inherit hota hai. 
// --------------------------------------------------------------------------------------------


// 2. Nullish Coalescing
// let input;
// let a = input ?? 'Hello';  // a = 'Hello'
// --------------------------------------------------------------------------------------------


// 3. Temporal Dead Zone (TDZ) → Period between variable declaration and initialization where accessing let/const throws an error.
// --------------------------------------------------------------------------------------------


// 4. bind, call, apply → Control this: call/apply invoke immediately (apply takes array), bind returns a new function.
// const user = {
//   name: "Arya"
// };

// function greet(city, country) {
//   console.log(`Hi, I am ${this.name} from ${city}, ${country}`);
// }

// greet.call(user, "Lucknow", "India"); // Hi, I am Arya from Lucknow, India
// greet.apply(user, ["Lucknow", "India"]); // Hi, I am Arya from Lucknow, India
// const boundGreet = greet.bind(user, "Lucknow", "India");
// boundGreet(); // Hi, I am Arya from Lucknow, India
// --------------------------------------------------------------------------------------------


// 5. Shallow vs deep copy → Shallow copies only top-level properties; deep copies duplicate nested structures fully.
// const original = {
    //   name: "Arya",
//   address: { city: "Lucknow" }
// };
// const shallowCopy = { ...original };
// shallowCopy.address.city = "Delhi";
// console.log(original.address.city); // "Delhi" ❗ (changed)

// const deepCopy = structuredClone(original);
// deepCopy.address.city = "Delhi";
// console.log(original.address.city); // "Lucknow" ✅ (unchanged)
// --------------------------------------------------------------------------------------------


// 6. Array methods → map (transform), filter (condition), reduce (aggregate), find (first match), some/every (boolean checks).
// const nums = [1, 3, 5];
// const users = [
    //   { id: 1 },
    //   { id: 2 },
    //   { id: 3 }
    // ];
    
    // const user = users.find(u => u.id === 2); // returns { id: 2 }
    // const hasEven = nums.some(n => n % 2 === 0); // returns false
    // const allEven = nums.every(n => n % 2 === 0); // returns false
// --------------------------------------------------------------------------------------------


// 7. Object methods → keys, values, entries iterate data; assign merges objects (shallow copy).
// const user = { name: "Arya", age: 22 };
// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const keys = Object.keys(user); // return an array of keys
// const values = Object.values(user); // returns an array of values all keys
// for (const [key, value] of Object.entries(user)) {
    //   console.log(key, value);
    // } // returns key and value of all objects entries in an iteration form.
    // const merged = Object.assign({}, obj1, obj2); // returns a merged new object.
// --------------------------------------------------------------------------------------------


// 8. Event loop → Handles async execution using call stack + queues (microtasks like promises run before macro tasks like setTimeout).

// Microtasks
// Promises
// async/await

// Macrotasks
// setTimeout()
// setInterval()
// setImmediate() (Node.js specific)
// I/O callbacks (file system, network, DB, etc.)
// UI rendering / repaint (browser)
// requestAnimationFrame() (browser)
// requestIdleCallback() (browser)
// DOM events (click, input, scroll, etc.)
// MessageChannel / postMessage callbacks
// --------------------------------------------------------------------------------------------


// 9. Set, Map, WeakSet, WeakMap → Set (unique values), Map (key-value), Weak* allow garbage collection of keys (no memory leaks).
// const userIds = new Set();
// const userMap = new Map();
// const activeUsers = new WeakSet();
// const privateData = new WeakMap();

// // set example
// userIds.add("u1");
// userIds.add("u2");
// userIds.add("u1"); // duplicate ignored

// // map example
// userMap.set("u1", { name: "Arya" });
// userMap.set("u2", { name: "Rahul" });

// // weak set example
// let user = { id: "u1" };
// activeUsers.add(user);
// // later
// user = null; // eligible for garbage collection

// // weak map example
// privateData.set(user, { token: "secret" });
// console.log(privateData.get(user)); // { token: 'secret' }
// // later
// user = null; // key + value eligible for GC
// --------------------------------------------------------------------------------------------


// 10. Debouncing & Throttling → Debounce delays execution until inactivity; throttle limits execution rate over time.
// Debounce → reduces unnecessary API load
// Throttle → controls CPU-heavy operations frequency
// Both are critical for performance optimization + rate limiting at UI layer
// --------------------------------------------------------------------------------------------


// 11. JSON → parse converts string → object; stringify converts object → string (used in APIs/storage).
// const obj = {
    //     name: 'aryan',
    //     age: 12
    // }
    
    // const objAsString = JSON.stringify(obj);
    // console.log(objAsString);
    
    // const parsedObject = JSON.parse(objAsString);
    // console.log(parsedObject.name);
// --------------------------------------------------------------------------------------------


// 12. Prototypes → Objects inherit properties via prototype chain, enabling memory-efficient method sharing.
// function User(name) {
//   this.name = name;
// }

// // shared method (NOT recreated per instance)
// User.prototype.sayHi = function () {
//   return `Hi, I am ${this.name}`;
// };

// const u1 = new User("Arya");
// const u2 = new User("Rahul");