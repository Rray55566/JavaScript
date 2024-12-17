//  Arthimetic Operators

// let a = 5;
// let b = 4;


// console.log("a = ", a, "& b = ", b);
// console.log("a + b =", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b =", a * b);
// console.log("a / b =", a / b);
// console.log("a % b =", a % b);   
// console.log("a ** b =", a ** b);

// Unary Operator

// let a = 5;
// let b = 4;

// console.log("a =", a, "b =", b);
// a++;
// console.log("a =", a);

// a--;
// console.log("a =", a);

// console.log("a++ = ", a++);  // first print the same value and then update.
// console.log("a = ", a);      // Updated new value


// console.log("--a = ", --a);  // first update and then print



// Assignment Operators

// let a = 5;
// let b = 4;

// // a += 4;            // a = a + 4
// // a -= 4;
// a *= 4;               // we can use all arithmetic oprators
// console.log("a =", a);



// Comparision Operators
// (==)


// let a = 5;
// let b = 4;

// console.log("a == b =", a == b);  //Equal to

// console.log(a != b);             // not equal to


// (===)

// let a = 5;
// let b = "5";          // data type not same

// console.log("a === b =", a === b);
// console.log("a !== b =", a !== b);


// let a = 5;
// let b = 5;
 
// console.log(a  > b);    //greater than
// console.log(a  < b);    // Less than
// console.log(a >= b);    //greater than equal to
// console.log(a <= b);    // sLess than equal to


// Logical Operators

//Logical AND (&&)

// let a = 6;
// let b = 5;

// Return trueS
// let cond1 = a > b;
// let cond2 = a===6;
// console.log(cond1 && cond2);

// console.log("cond1 && cond2 =", a > b && a === 6);    // also write this.

// Return False
// let cond1 = a > b;
// let cond2 = a===8;
// console.log(cond1 && cond2);

// let age = 33;
// let hasID = true;

// if (age > 18 && hasID) {
//   console.log("age && hasID =", age && hasID);
// }



// Logical OR (||)

// let a = 6;
// let b = 5;
// console.log("cond1 || cond2 =", a < b || a === 6);

// let isWeekend = true;
// let isHoliday = false;

// if (isWeekend || isHoliday) {
//   console.log(true);
// }


// Logical NOT (!)

// let a = 6;
// let b = 5;

// console.log("!(a < b) =", !(a < b) );  // return true
// console.log("!(a < b) =", !(a > b) ); //  return false


// Ternary Operator
// let age = 18;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);





// CONDITIONAL STATEMENT

// if else

// let age = 18;

// if (age >= 18) {
//     console.log("You can vote");
// }

// if (age < 12){
//     console.log("you cannot vote");
// }


// let mode = "dark";
// let color;

// if (mode === "dark"){
//     color = "black";
// }

// if (mode === "light"){
//     color = "white";            
// }
// console.log(color);



// if-else statement

// let mode = "light";
// let color;

// if (mode === "dark"){
//     color = "black";
// }  else {
//     color = "white";
// }

// console.log(color);


// let age = 18;
  
// if (age >=18){
//     console.log("You can vote");
// }  else{
//     console.log("you cannot vote");
// }

//even or odd

// let num = 10;

// if ( num % 2 === 0){
//     console.log(num, "is even");
// }  else{
//     console.log(num, "is odd");
// }



// else-if statement

// let score = 82;

// if (score >= 88){
//     console.log(score, "Grade: A");
// }  else if (score >= 80){
//     console.log(score, "Grade: B");
// }  else if (score >= 40){
//     console.log(score, "Grade: C");
// }  else{
//     console.log(score, "Grade: F");
// }

// let mode = "red";
// let color;

// if (mode === "dark"){
//     color = "black";
// }  else if(mode === "light"){
//     color = "white";
// }  else if(mode === "blue"){
//     color = "blue";
// }  else if(mode === "red"){
//     color = "red";
// }  else{
//     color = "yellow";
// }

// console.log(color);


// switch Statement
// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   default:
//     console.log("Invalid day");
// }


// Question-1

// let num = prompt ('enter a number:');

// if (num % 5 === 0){
//     console.log(num,"is a multiple of 5");
// } else{
//     console.log(num,"is not a multiple of 5");
// }


//Question-2

let score = 88;
let grade;

if (score >= 90 && score <= 100){
    grade = "A";
} else if (score >= 70 && score <= 89){
    grade = "B";
} else if (score >= 60 && score <= 69){
    grade = "C";
} else if (score >= 50 && score <= 59){
    grade = "D";
}  else if (score >= 0 && score <= 49){
    grade = "F";
}

console.log("according to your scores, your grade was :",grade);

