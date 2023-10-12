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
