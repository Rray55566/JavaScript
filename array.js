// let heroes = ["iromman", "hulk", "thor"];
// console.log(heroes);
// console.log(heroes.length);

// let number = [88, 55, 88, 90,33];
// console.log(number);
// console.log(number.length);  // property

// let mix = ["rohit Sharma", "rahul", 33, 88, true, false];
// console.log(mix);
// console.log(mix.length);
// console.log(typeof mix);


//array index

// let number = [66, 77, 88 ,99, 100];
// console.log(number);
// console.log(number[0]);
// console.log(number[1]);
// console.log(number[2]);
// console.log(number[3]);
// console.log(number[4]);

// number[0] = 55;      // change array value
// console.log(number);


//Looping over an Array

// let cricketers = ["rohit Sharma", "virat", "rahul", "buhmra", "hardik", "rishabh", "bhuvi", "dhoni"];

// // for(let i = 0; i < cricketers.length; i++){    //using for loop
// //     console.log(cricketers[i]);
// // }


// //using for...of loop

// for(let idel of cricketers){
//     console.log(idel);
// }


// let cities = ["Delhi", "mumbai", "pune", "hydrabad", "jhansi", "lucknow", "kanpur", "ayodhya", "ghorakhpur"];

// for(let element of cities){
//     console.log(element.toUpperCase());
// }


//Question- find out average marks of students..

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;

// for (let i=0; i < marks.length; i++){
//     sum += marks[i];
// }

// average = sum / marks.length
// console.log(average);


// using for of loop

// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for(let value of marks){
//    sum += value;
// }
// average = sum / marks.length;
// console.log(`Average marks of the class is = ${average}`);



 //Question 2

//  let item = [250, 645, 300, 900, 50];
//  for(let i = 0; i < item.length; i++){
//     let offer = item[i] / 10;
//     item[i] -= offer;
//  }
//  console.log(item);


//for of loop

// let item = [250, 645, 300, 900, 50];
// let i = 0;
// for(let value of item){
//     console.log(`value at index ${i} = ${value}`);
//     let offer = value /10;
//     item[i] = item[i] - offer;
//     console.log(`value after offer = ${item[i]}`);
// i++;
// }



//Array methods

//push- Add to end

// let foodItems = ["apple", "mango", "orange", "potato", "tomato"];
// foodItems.push("chips", "burger", "pizza");
// // for(let i = 0; i < foodItems.length; i++){
// // console.log(foodItems[i]);
// // }
// console.log(foodItems);


//pop- Delete from end

// let foodItems = ["apple", "mango", "orange", "potato", "tomato"];
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deletedItem);


//toString- convert array to string

// let foodItems = ["apple", "mango", "orange", "potato", "tomato"];
// console.log(foodItems);
// console.log(foodItems.toString());

// let marks = [66, 88, 33, 67, 90];
// console.log(marks);
// console.log(marks.toString());


//concat- jions multiple array

// let marvelHeroes = ["ironman", "thor", "spiderman",];
// let dcHeroes = ["batman", "superman", "aquaman"];
// let indianHeroes = ["saktiman", "krish"];

// let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
// console.log(heroes);


// unshift- Add to start,, shift- Delete from start

// let marvelHeroes = ["ironman", "thor", "spiderman",];
// console.log(marvelHeroes);

// console.log(marvelHeroes.unshift("antman"));

// let marvelHeroes = ["ironman", "thor", "spiderman",];

// let value = marvelHeroes.shift();
// console.log("deleted", value);
// console.log(marvelHeroes);


// slice- Return a piece of array

// let marvelHeroes = ["ironman", "spiderman", "thor", "antman", "hulk"];
// console.log(marvelHeroes);

// // let y = marvelHeroes.slice(1,4);
// //    let y = marvelHeroes.slice(1);
// let y = marvelHeroes.slice();          //return full array
// console.log(y);
// // console.log(marvelHeroes.slice(1, 4));


// splice

// let arr = [1, 2, 3, 4, 5, 6, 7];
//  console.log(arr.splice(2, 2, 100, 101));
//  console.log(arr);

// let arr2 = arr.splice(2, 0, 100);          //add element
// console.log(arr);

// let arr2 = arr.splice(2, 1);          //remove element
// console.log(arr);


// let arr2 = arr.splice(2, 1, 100);          //Replace element
// console.log(arr);


// Question- store companies

// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// console.log(companies);

// // a

// let arr = companies.shift();
// console.log(companies);

// // b

// console.log(companies.splice(2, 1, "Ola"))
// console.log(companies);

// // c

// console.log(companies.push("Amazon"));
// console.log(companies);


//Create an array of 5 numbers and display each element using a for loop.

// let num = [1, 2, 3, 4, 5];
// for(let i = 0; i< num.length; i++){
//     console.log(num[i]);
// }


//Add an element to the end of an array using .push() and display the array.

// let fruits = ["apple", "banana", "orange"];
// console.log(fruits);
// fruits.push("mango");
// console.log(fruits);


//Remove the first element of an array using .shift() and display the array.

// let cities = ["delhi", "mumbai", "pune", "ayodhya"];
// console.log(cities);
//  let deleted = cities.shift()
// console.log("deleted",deleted);
// console.log(cities);


//Find the length of an array using .length.

// let num = [1, 2, 5, 8, 0, 5, 65];
// console.log("number of length =",num.length);


//Create an array of 5 strings and join them into a single string using .

// let fruit = ["apple", "banana", "orange", "mango", "grapes"];
// console.log(fruit);

// console.log(fruit.toString());

// let fruit = ["apple", "banana", "orange", "mango", "grapes"];

// let str = fruit.join(", ");                                     // using join()
// console.log(str);



//Reverse the elements of an array using .reverse() and display the reversed array.

// let num = [1, 2, 3, 4, 5, 6, 8, 9];
// let reverse = num.reverse();
// console.log(num);


//Sort an array of numbers in ascending order using .sort().

// let num = [66, 99, 22, 88, 10, 20, 15, 39];
//  let arrange = num.sort();
//  console.log(num);


//Write a program to calculate the sum of all elements in an array using a for loop.

let num = [10, 20, 30, 40, 50];

let sum = 0;

for(let i=0; i < num.length; i++) {
    sum += num[i];
}
console.log(sum);