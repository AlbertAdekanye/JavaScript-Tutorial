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