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
