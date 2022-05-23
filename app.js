// Chapter No 10 - 11

// Q1

// var city = prompt("Enter Your City");
// if (city === "Karachi" || city === "karachi") {
//     alert("Welcome to city of lights");
// }

// Q2 

// var gender = prompt("Enter Your Gender");
// if (gender === "Male" || gender === "male") {
//     alert(" Good Morning Sir");
// }
// else if (gender === "Female" || gender === "female") {
//     alert(" Good Morning Ma'am");
// }
// else (
//     alert("Please Enter Male or Female")
// )

// Q3

// var color = prompt("Enter any Traffic Signal Color");
// if (color === "Red" || color === "red") {
//     alert("Must Stop");
// }
// else if (color === "Yellow" || color === "yellow") {
//     alert("Ready to move");
// }
// else if (color === "Green" || color === "green") {
//     alert("Move now");
// }
// else (
//     alert("Please write correct Traffic light Color ( Red , Yellow , Green)")
// )

// Q4

// var fuel = +prompt("Enter remaining fuel in Car (In Litres)");
// if (fuel <= 0.25) {
//     alert("Please refill the fuel in your car");
// }
// else (
//     alert("You are Good to Go")
// )

// Q5

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// It will run because ++a is 5

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// It will not run because b++ is 82

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// Condition 2 and 4 will run

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// It will run because totalCost(22000) === materialCost(20000) + laborCost(2000) 

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// First if condition will run because if(true) is trueand if(false) is false

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// It will run because two strings are equal when they compare to each other

// Q6

// var markSub1 = +prompt("Enter Sub 1 marks");
// var markSub2 = +prompt("Enter Sub 2 marks");
// var markSub3 = +prompt("Enter Sub 3 marks");
// var totalObtainedMarks = markSub1 + markSub2 + markSub3;
// var totalMarks = +prompt("Enter What is Your Total Marks (Not Obtained total marks)");
// var result = (totalObtainedMarks) * 100 / totalMarks;
// document.write("<h1> MarksSheet </h1>")

// if (result <= 100) {
//     if (result <= 100 && result >= 80) {
//         document.write("Total Marks : " + totalMarks + "<br />");
//         document.write("Marks Obtained : " + totalObtainedMarks + "<br />");
//         document.write("Percentage " + result + "%" + "<br />");
//         document.write("Grade : A-one" + "<br />");
//         document.write("Remarks : Excellent" + "<br />");
//     }
//     else if (result >= 70) {
//         document.write("Total Marks : " + totalMarks + "<br />");
//         document.write("Marks Obtained : " + totalObtainedMarks + "<br />");
//         document.write("Percentage " + result + "%" + "<br />");
//         document.write("Grade : A" + "<br />");
//         document.write("Remarks : Good" + "<br />");
//     }

//     else if (result >= 60) {
//         document.write("Total Marks : " + totalMarks + "<br />");
//         document.write("Marks Obtained : " + totalObtainedMarks + "<br />");
//         document.write("Percentage " + result + "%" + "<br />");
//         document.write("Grade : You need to improve" + "<br />");
//         document.write("Remarks : You need to Improve" + "<br />");
//     }

//     else if (result < 60) {
//         document.write("Total Marks : " + totalMarks + "<br />");
//         document.write("Marks Obtained : " + totalObtainedMarks + "<br />");
//         document.write("Percentage " + result + "%" + "<br />");
//         document.write("Grade : Fail" + "<br />");
//         document.write("Remarks : Sorry" + "<br />");
//     }
// }
// else (
//     alert("Error result must be less than 100")
// )

// Q7

// var randomNumber = 5;
// var userNumber = +prompt("Guess my number from 1 to 10");
// if (userNumber === randomNumber) {
//     alert("Bingo! Correct answer")
// }
// else if (userNumber === randomNumber + 1 || userNumber === randomNumber - 1) {
//     alert("Close enough to the correct answer")
// }
// else (
//     alert("Wrong guess try again")
// )

// Q8

// var num = +prompt("Enter any Numbers");
// if (!isNaN(num)) {

//     if (num % 3 === 0) {
//         alert("The number is divisible by 3")
//     }
//     else (
//         alert("The number is not divisible by 3")
//     )

// }
// else (
//     alert("Please write a Number")
// )

// Q9

// var num = +prompt("Write any number");

// if (!isNaN(num)) {

//     if (num % 2 === 0) {
//         alert("The number is Even")
//     }
//     else (
//         alert("The number is Odd")
//     )

// }
// else (
//     alert("Please write a Number")
// )

// Q10

// var temp = +prompt("Enter today's temperature");
// if (temp >= 40) {
//     alert("It is too hot outside.")
// }
// else if (temp >= 30) {
//     alert("The Weather today is Normal.")
// }
// else if (temp >= 20) {
//     alert("Today's Weather is cool")
// }
// else if (temp <= 10 && temp >= 0) {
//     alert("OMG! Today's weather is so Cool.")
// }
// else if (temp <= -1) {
//     alert("OMG! Today's Snowing Outside")
// }
// else (
//     alert("Please write Temperature")
// )

// Q11

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var opr = prompt("Enter Operator (+, -, *, /, %)");
// var result;

// if (!isNaN(num1 && num2)) {

//     if (opr === "+") {
//         result = num1 + num2
//     }
//     else if (opr === "-") {
//         result = num1 - num2
//     }
//     else if (opr === "*") {
//         result = num1 * num2
//     }
//     else if (opr === "+") {
//         result = num1 + num2
//     }
//     else if (opr === "/") {
//         result = num1 / num2
//     }
//     else if (opr === "%") {
//         result = num1 % num2
//     }
//     else (
//         alert("Please write correct Operator")
//     )

// }
// else (
//     alert("Please write a Number")
// )

// document.write(result);
