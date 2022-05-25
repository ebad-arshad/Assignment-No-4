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


// Chapter 12 - 13

// Q1

// var user = prompt("Enter a Character ( Number , UpperCase Letter , LowerCase Letter ) ");
// var number = Number(user);
// var upperCase = user[0].toUpperCase();
// var lowerCase = user[0].toLowerCase();
// if (isNaN(number)) {

//     if (user[0] === upperCase) {
//         alert(user + " is a Capitalized Letter")
//     }
//     else if (user[0] === lowerCase) {
//         alert(user + " is a Lowerized Letter")
//     }
//     else {}

// }
// else if (!isNaN(number)) {
//     alert("The given character is a Number");
// }
// else {
//     alert("The given Character is neither a number or alphabet")
// }

// Q2

// var num1 = +prompt("Enter first Integer to compare");
// var num2 = +prompt("Enter second Integer to compare");
// num1 = Math.round(num1);
// num2 = Math.round(num2);
// if (!isNaN(num1 && num2)) {
//     if (num1 > num2) {
//         alert(num1 + " is larger than " + num2)
//     }
//     else if (num1 < num2) {
//         alert(num2 + " is larger than " + num1)
//     }
//     else if (num1 === num2) {
//         alert(num2 + " and " + num1 + " are equal")
//     }
// }
// else {
//     alert("Please write any Integer")
// }

// Q3

// var num = +prompt("Enter any Number (+1,-1,0)");
// if (!isNaN(num)) {

// if (num < 0) {
//     alert("The number is Negative")
// }
// else if (num > 0) {
//     alert("The number is Positive")
// }
// else if (num === 0) {
//     alert("The number is Zero") 
// }

// }
// else {
//     alert("Please write a Number")
// }

// Q4

// var string = prompt("Enter a single alphabet");
// if (string === "a" || string === "e" || string === "i" || string === "o" || string === "u" || string === "A" || string === "E" || string === "I" || string === "O" || string === "U") {
//     alert("The Alphabet is Vowel");
// }
// else {
//     alert("The value is not a Vowel")
// }

// Q5

// var correctPassword = "ebadarshad@14";
// var user = prompt("Enter Password", "Please enter your password");
// if (user === "") {
//     alert("Please enter your password")
// }
// else if (user === correctPassword) {
//     alert("Correct! The password you entered matches the original password")
// }
// else {
//     alert("Incorrect password")
// }

// Q6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// Q7

// var time = +prompt("Enter time in 24 hours format (i.e 1900)");

// if (!isNaN(time)) {

// if (time >= 0000 && time < 1200) {
//     alert("Good Morning!")
// }
// else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!")
// }
// else if (time >= 1700 && time < 2100) {
//     alert("Good Evening!")
// }
// else if (time >= 2100 && time <= 2359) {
//     alert("Good Night!")
// }
// else {
//     alert("Enter correct format of time")
// }

// }
// else {
//     alert("Enter a Number")
// }



// Chapter 14 - 16

// Q1

// var literalArr = [];

// Q2

// var objectArr = new Array();

// Q3

// var stringArr = ["Karachi", "Lahore"];

// Q4

// var numberArr = [123, 321];

// Q5

// var booleanArr = [true, false];

// Q6

// var mixedArr = ["Islamabad", 123, true];

// Q7

// var qualArr = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
// document.write("<h1> Qualifications; </h1>");
// document.write("1) " + qualArr[0] + "<br />");
// document.write("2) " + qualArr[1] + "<br />");
// document.write("3) " + qualArr[2] + "<br />");
// document.write("4) " + qualArr[3] + "<br />");
// document.write("5) " + qualArr[4] + "<br />");
// document.write("6) " + qualArr[5] + "<br />");
// document.write("7) " + qualArr[6] + "<br />");
// document.write("8) " + qualArr[7] + "<br />");

// Q8

// var user1 = prompt("Enter First Student Name");
// var user2 = prompt("Enter Second Student Name");
// var user3 = prompt("Enter Third Student Name");
// var user1Marks = +prompt("Enter First Student Marks");
// var user2Marks = +prompt("Enter Second Student Marks");
// var user3Marks = +prompt("Enter Third Student Marks");
// var tMarks = 500;
// var studArr = [];
// var studMarksArr = [];
// var per1 = user1Marks * 100 / tMarks;
// var per2 = user2Marks * 100 / tMarks;
// var per3 = user3Marks * 100 / tMarks;
// studArr.push(user1, user2, user3)
// studMarksArr.push(user1Marks, user2Marks, user3Marks)

// if(user1 && user2 && user3 && user1Marks && user2Marks && user3Marks) {
//     document.write("Score of " + studArr[0] + " is " + studMarksArr[0] + ". " + "Percentage: " + per1 + "%" + "<br />");
//     document.write("Score of " + studArr[1] + " is " + studMarksArr[1] + ". " + "Percentage: " + per2 + "%" + "<br />");
//     document.write("Score of " + studArr[2] + " is " + studMarksArr[2] + ". " + "Percentage: " + per3 + "%" + "<br />");
// } else {
//     alert("Please fill Correct Information")
// }

// Q9

// Q10

// var score = [320,280,420,100];
// document.write("Scores of Students : " + score);
// document.write("<br>");
// score.sort();
// document.write("Ordered Scores of Students : " + score);

// Q11

// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list: <br>" + cities);
// document.write("<br>");
// document.write("<br>");
// var selectedCities = cities.slice(2,4);
// document.write("Selected cities list: <br>" + selectedCities);

// Q12

// var arr = ["This", "is", "my", "cat"];
// document.write("Array:" + "<br>" + arr);
// document.write("<br>");
// document.write("<br>");
// var joinedArr = arr.join(" ");
// console.log(joinedArr)
// document.write("String:" + "<br>" + joinedArr);

// Q13




