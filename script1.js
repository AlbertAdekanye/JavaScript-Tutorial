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
// while (condition){
    // conditional statement or code;
// }

var i = 0;
while (i < 10){
  console.log(i);
  i++;
}

// javascript do while loop used when the number of iterations is unknown
// do {
    // conditional statement or code;
// } while (condition);

var i = 0;
do {
  console.log(i);
  i++;
} while (i < 10);

// javascript switch statement used when there are multiple conditions

var day = 2;
switch (day){
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("another day");
}

var daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var bestDay = 3, worstDay = 6;
switch (bestDay || worstDay){
  case 1:
    console.log(daysOfTheWeek[0]);
    break;
  case 2:
    console.log(daysOfTheWeek[1]);
    break;
  case 3:
    console.log(daysOfTheWeek[2]);
    break;
  case 4:
    console.log(daysOfTheWeek[3]);
    break;
  case 5:
    console.log(daysOfTheWeek[4]);
    break;
  case 6:
    console.log(daysOfTheWeek[5]);
    break;
  case 7:
    console.log(daysOfTheWeek[6]);
    break;
  default:
    console.log("another day");
}

var monthsOfTheYear = {
  "January": 1,
  "February": 2,
  "March": 3,
  "April": 4,
  "May": 5,
  "June": 6,
  "July": 7,
  "August": 8,
  "September": 9,
  "October": 10,
  "November": 11,
  "December": 12
}
var birthMonth = "March";
switch (birthMonth){
  case "January":
    console.log(monthsOfTheYear.January);
    break;
  case "February":
    console.log(monthsOfTheYear.February);
    break;
  case "March":
    console.log(monthsOfTheYear.March);
    break;
  case "April":
    console.log(monthsOfTheYear.April);
    break;
  case "May":
    console.log(monthsOfTheYear.May);
    break;
  case "June":
    console.log(monthsOfTheYear.June);
    break;
  case "July":
    console.log(monthsOfTheYear.July);
    break;
  case "August":
    console.log(monthsOfTheYear.August);
    break;
  case "September":
    console.log(monthsOfTheYear.September);
    break;
  case "October":
    console.log(monthsOfTheYear.October);
    break;
  case "November":
    console.log(monthsOfTheYear.November);
    break;
  case "December":
    console.log(monthsOfTheYear.December);
    break;
  default:
    console.log("another month");
}

// javascript events - an action that occurs as a result of the user or another source
// onclick event

function sayHello(){
  alert("hello");
}

// javascript iteration statements - statements that repeat a block of code until a condition is met
// for loop, while, do while, for in

// loop control statements - statements that control the execution of a loop

var i;
for (i = 0; i <= 10; i++) {
  if (i == 5){
    break;
  }
  console.log(i);
}

// javascript if else statement - used to execute a block of code if a condition is true and another block of code if the condition is false

var grade = 80;
var cgpa = 4.5;
if (grade >= 80){
  console.log("A");
}else if (grade >= 70){
  console.log("B");
}else if (grade >= 60){
  console.log("C");
}else if (grade >= 50){
  console.log("D");
}else{
  console.log("F");
}
console.log(grade);