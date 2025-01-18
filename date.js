//create dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());
// console.log(typeof myDate);


//for specific Date

// let myCreatedDate = new Date(2023, 0, 23);
// let myCreatedDate = new Date(2023, 0, 23, 5, 23);
// let myCreatedDate = new Date("2023-01-23");
// let myCreatedDate = new Date("01-23-2023");
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());


//Timestamp

// let myTimeStamp = new Date();
// // console.log(myTimeStamp);
// // console.log(myTimeStamp.getTime());          //time in ms
// // console.log(new Date()/1000);                   // convert into second but it give the output in decimal

// console.log(Math.floor(new Date()/1000));        //without decimal



// let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getFullYear());
// console.log(newDate.getMonth());
// console.log(newDate.getMonth() + 1);



//set date method

// let myDate = new Date();
// myDate.setFullYear(2015);
// myDate.setMonth(5);
// myDate.setDate(23);
// myDate.setMinutes(10);
// myDate.setSeconds(10);
// myDate.setMilliseconds(2);
// myDate.setTime(10);
// console.log(myDate);



// Create a Date object representing your birthday. Log it to the console.

// let birthday = new Date("2001-11-23");
// console.log(birthday.toLocaleDateString());


//Write a program to print the current date and time using new Date().

// let date = new Date();
// console.log(date);


// Write a program to get the current year, month, and day of the month.

// let date = new Date();

// let year = date.getFullYear();
// let month = date.getMonth() + 1;
// let day = date.getDate();
// console.log(`${year}-${month}-${day}`);


//Print the current time in HH:MM:SS format.

// let date = new Date();

// let hour = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();

// hour = hour.toString().padStart(2, "0");
// min = min.toString().padStart(2, "0");
// sec = sec.toString().padStart(2, "0");

// let result = `${hour}:${min}:${sec}`;
// console.log(result);


//

// let day = new Date();

// let weekDays = ["sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];

// let currentDay = day.getDay();

// console.log(weekDays[currentDay]);


//Get the number of milliseconds that have passed since January 1, 1970, using Date.now()

// let date = Date.now();
// console.log(date);



// Write a program to set a Date object to January 1, 2000, and print it.

// let date = new Date(2000, 0, 1);
// console.log(date);


//Change the month of the current date to December.

// let day = new Date();
// day.setMonth(11);
// console.log(day);



//Set the time of a Date object to 3:30 PM.

// let time = new Date();

// time.setHours(3, 30, 0, 0);
// console.log(time);


//Write a program to check if today’s date is later than January 1, 2023.

// let date = new Date();

// let otherDate = new Date(2023, 1, 1);

// if(date > otherDate){
//    console.log("Date is later");
// } else {
//    console.log("Date is not later");
// }



//Compare two dates (e.g., new Date(2023, 0, 1) and new Date(2024, 0, 1)) and print which one is earlier.

// let date1 = new Date(2023, 0, 2);
// let date2 = new Date(2024, 0, 2);

// if(date1<date2){
//     console.log("date1 is earlier", date1);
// } else {
//     console.log("date1 is not earlier", date2);
// }