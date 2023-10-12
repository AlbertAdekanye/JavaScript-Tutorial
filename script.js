// arrays
// it is basically a collection of data items of same type under one name 

myArr = [1,2,3,4,5,6,7,8,9,10];
console.log(myArr);

// accessing array elements
console.log(myArr[0]);

// changing array elements
myArr[0] = 0;
console.log(myArr);

// array methods
// push() - adds element at the end of the array
myArr.push(11);
console.log(myArr);

// pop() - removes element from the end of the array
myArr.pop();
console.log(myArr);

// unshift() - adds element at the beginning of the array
myArr.unshift(-1);
console.log(myArr);

// shift() - removes element from the beginning of the array
myArr.shift();
console.log(myArr);

// splice() - adds/removes element from the middle of the array
myArr.splice(5, 0, 5.5);
console.log(myArr);

// slice() - returns a new array from the given array
newArr = myArr.slice(2, 5);
console.log(newArr);

// concat() - concatenates two arrays
newArr = myArr.concat(newArr);
console.log(newArr);

// sort() - sorts the array
newArr.sort();
console.log(newArr);

// reverse() - reverses the array
newArr.reverse();
console.log(newArr);

// indexOf() - returns the index of the element
console.log(newArr.indexOf(5));
console.log(newArr.indexOf(5, 6));

// lastIndexOf() - returns the last index of the element
console.log(newArr.lastIndexOf(5));

// join() - joins the array elements into a string
console.log(newArr.join('A'));

// toString() - converts the array into a string
console.log(newArr.toString());

// length - returns the length of the array
console.log(newArr.length);

// delete - deletes the element from the array
delete newArr[5];

// for loop
for (i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
}

// for in loop
for (i in newArr) {
    console.log(newArr[i]);
}

// for of loop
for (i of newArr) {
    console.log(i);
}

// forEach loop
newArr.forEach(function (i) {
    console.log(i);
});

// while loop
i = 1;
while (i < newArr.length) {
    console.log(newArr[i]);
    i++;
}

// do while loop
i = 1;
do {
    console.log(newArr[i]);
    i++;
} while (i < newArr.length);

// Path: script.js
// objects
// it is basically a collection of data items of different types under one name

myObj = {
  "name": "Albert",
  "age": 21,
  "isMale": true,
  "hobbies": ["reading", "gaming", "coding", ""],
  "school": "Federal University Oye-Ekiti",
  "department": "Computer Science",
  "level": 300,

  "friends": [
    "Pearl",
    "Jae",
    "Vickie",
    "",
  ],
  "address": {
    "street": "phase two road",
    "city": "Oye",
    "state": "Ekiti",
    "country": "Nigeria"
  }
}

// accessing object properties
console.log(myObj.address.city);
console.log(myObj["address"]["city"]);
console.log(myObj.level);

// changing object properties
myObj.level = 400;
console.log(myObj.level);

// adding object properties
myObj["isMarried"] = false;
console.log(myObj.isMarried);

// deleting object properties
delete myObj.isMarried;
console.log(myObj.isMarried);

// object methods
// Object.keys() - returns the keys of the object

console.log(Object.keys(myObj));
console.log(Object.values(myObj));

// Object.values() - returns the values of the object

// Object.entries() - returns the keys and values of the object

console.log(Object.entries(myObj));

// Object.assign() - copies the object

myObj2 = Object.assign({}, myObj);
console.log(myObj2);

// Object.freeze() - freezes the object

Object.freeze(myObj);
myObj.name = "Albert";
console.log(myObj.name);

// Object.seal() - seals the object

// Object.seal(myObj);
// myObj.name = "Albert";
// console.log(myObj.name);

// Object.isFrozen() - checks if the object is frozen

console.log(Object.isFrozen(myObj));

// Object.isSealed() - checks if the object is sealed

Object.isSealed(myObj);
console.log(Object.isSealed(myObj));

// Object.isExtensible() - checks if the object is extensible

console.log(Object.isExtensible(myObj));

// Object.is() - checks if two objects are equal

console.log(Object.is(myObj, myObj2));

// Object.getOwnPropertyNames() - returns the properties of the object

console.log(Object.getOwnPropertyNames(myObj));

// Object.getPrototypeOf() - returns the prototype of the object

console.log(Object.getPrototypeOf(myObj));

// Object.setPrototypeOf() - sets the prototype of the object

console.log(Object.setPrototypeOf(myObj, myObj2));

// Object.hasOwnProperty() - checks if the object has the property

console.log(myObj.hasOwnProperty("name"));
console.log(myObj.hasOwnProperty("isMarried"));

// Object.isPrototypeOf() - checks if the object is the prototype of another object

console.log(Object.isPrototypeOf(myObj));
console.log(Object.isPrototypeOf(myObj2));

// Object.toString() - converts the object into a string

console.log(myObj.toString());

// Object.toLocaleString() - converts the object into a local string

console.log(myObj.toLocaleString());

// Object.valueOf() - returns the primitive value of the object

console.log(myObj.valueOf());

// Object.defineProperty() - defines a new property for the object

Object.defineProperty(myObj, "isMarried", { value: true });


// Object.defineProperties() - defines new properties for the object

Object.defineProperties(myObj, {
  "isMarried": { value: false },
  "isEmployed": { value: false }
});

if (myObj.isMarried) {
  console.log("I am married");
} else {
  console.log("I am not married");
}

// Object.getOwnPropertyDescriptor() - returns the property descriptor of the object

console.log(Object.getOwnPropertyDescriptor(myObj, "isMarried"));

// Object.getOwnPropertyDescriptors() - returns the property descriptors of the object

console.log(Object.getOwnPropertyDescriptors(myObj));

// Object.preventExtensions() - prevents the object from being extended

Object.preventExtensions(myObj);