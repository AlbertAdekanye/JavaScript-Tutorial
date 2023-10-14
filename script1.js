// var arr = new Array (7, 2, 8, 1, 3, 4);
// var i, j, temp;

// for (i = 0; i < 6; i++){
//     for (j = 0; j < 5; j++){
//         if(arr[j] > arr[j+1]){
//             temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);

// variable scope

// var name = "Albert";
// var age = 21;
// var city = "New York";
// var occupation = "Student";
// var hobbies = ["reading", "coding", "gaming"];
// console.log(name + " i am " + age + " years old." + " i live in " + city + " and i am a "  + occupation + " i love " + hobbies[0] + ", " + hobbies[1] + ", " + hobbies[2]);

// conditional statements

var age = 21;
var isMale = true;
var isTall = true;
var isStudent = true;
var isAdult = false;
age = 16;

while (age <= 18){
    console.log("you are a teenager");
    age++;
}if (isMale && isTall && isStudent && isAdult){
  console.log("you are a student and a tall male")
}else if (isMale && isTall && isStudent && !isAdult){
  console.log("you are a tall male but not an adult");
} else if (!isMale && !isTall && !isStudent && !isAdult){
  console.log("you are not a tall male and not an adult and not a student either");
}else{
  console.log("your data isn't complete")
}


// functions - a block of code designed to perform a particular task

function sayHi(name, age){
  if(name != "Albert" || age != 21 && name != "John" || age != 20 && name != "Mike" || age != 18){
    console.log("");

  }else if(name == "Albert" || age == 21 && name != "John" || age != 20 && name != "Mike" || age != 18){
    console.log("hey Albert");
   
  }else if(name != "Albert" || age != 21 && name == "John" || age == 20 && name != "Mike" || age != 18){
    console.log("hey John");
   
  }else if(name != "Albert" || age != 21 && name != "John" || age != 20 && name == "Mike" || age == 18){
    console.log("hey Mike");
  
  }else if(name == "" || age == "" || name == "" && age == ""){
    console.log("you didn't enter your name or age");
  }
  // console.log("hello " + name + " you are " + age + " years old");
}
// sayHi("Albert", 21);
// sayHi("John", 20);
// sayHi("Mike", 18);
sayHi("love");

// return statement

function cube(num){
  return num * num * num;
}
var cubeNum = cube(3);
console.log(cubeNum);

// javascript objects - a collection of data items of different types under one name

var myObj = {
  "name": "Albert",
  "age": 21,
  "isMale": true,
  "hobbies": ["reading", "coding", "gaming"],
  "address": {
    "street": "123 main st",
    "city": "New York",
    "state": "NY"
  }
}
console.log(myObj.name);



// javascript for loop used when the number of iterations is known
// for (init; condition; increment){
    // conditional statement or code;
// }


for (var i = 1; i < 100; i++){
  if (i % 2 == 0){
    console.log(i);
  }
}

var myArr = ["Albert", "John", "Mike", "Mary"];
for (var i = 0; i < myArr.length; i++){
  console.log(myArr[i]);
}

// javascript while loop used when the number of iterations is unknown