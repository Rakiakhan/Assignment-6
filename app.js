//----------------- CHAPTER 21-25
    // //task1
    // var fName = prompt("Enter Your First Name");
    // var lName = prompt("Enter Your Last Name");
    // var fullName = fName + " " + lName;
    // alert("Welcome! Dear " + fullName);

    // //task2
    // var favPhone = prompt("Name the phone you like the most");
    // document.write("My favorite phone is: " + favPhone + "<br>");
    // document.write("Length of string: " + favPhone.length);
    
    // //task3
    // var str = "Pakistani";
    // document.write("String: " + str + "<br>");
    // document.write("Index of 'n': " + str.indexOf("n"));

    // //task4
    // var str = "Hello World";
    // document.write("String: " + str + "<br>");
    // document.write("Last index of 'l': " + str.lastIndexOf("l"));

    // //task5
    // var str = "Pakistani";
    // document.write("String: " + str + "<br>");
    // document.write("Character at index 3: " + str.charAt(3));

    // //task6
    // var fName = prompt("Enter Your First Name");
    // var lName = prompt("Enter Your Last Name");
    // var space = " ";
    // var fullName = fName.concat(space+lName);
    // alert("Welcome! Dear " + fullName);

    // //task7
    // var city = "Hyderabad";
    // document.write("City: " + city + "<br>");
    // document.write("After replacement: " + city.replace("Hyder","Islam"));

    // //task8
    // var message = "Ali and Sami are best friends. They play cricket and football together.";
    // document.write("Bofore: " + message + "<br>");
    // document.write("After: " + message.replace(/and/g, "&"));

    // //task9
    // var str = "472";
    // var converted = parseInt(str);
    // document.write("Value: " + str + "<br>");
    // document.write("Type: " + typeof(str) + "<br>");
    // document.write("Value: " + converted + "<br>");
    // document.write("Type: " + typeof(converted));
    
    // //task10
    // var userInput = prompt("Enter any word here");
    // document.write("User input: " + userInput + "<br>");
    // document.write("Uppercase: " + userInput.toUpperCase());

    // //task11
    // var userInput = prompt("Enter any word here","This is a sample text").toLowerCase();
    // var splitted = userInput.split(" ");
    // for (var i = 0; i < splitted.length; i++) {
    //     document.write(splitted[i].charAt(0).toUpperCase()+splitted[i].substring(1,)+" ");
    // }

    // //task12
    //  var num = 35.36;
    //  var Newnum = num.toString().split('.').join("");
    // document.write("Number: " + num + "<br>");
    //  document.write("Result: "+Newnum);
    
    // //task13
    // var userInput = prompt("Enter Username");
    // var splitted = userInput.split("");
    // var condtion = true;
    // for (var i = 0; i <= splitted.length - 1; i++) {
    //     var index = splitted[i].charCodeAt();
    //     if (index == 33 || index == 44 || index == 46 || index == 64) {
    //         condtion = false;
    //     } 
    //     else {            
    //         continue;
    //     }
    // }
    // if (condtion == true) {
    //     alert(userInput + " is a correct username.");
    // }
    // else {
    //     alert("Please enter a valid username");
    // }

    // //task14
    // var A = ["cake", "apple pie", "cookie", "chips", "patties"];
    // var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
    // if (A.indexOf(userInput) == -1) {
    //     document.write("We are sorry. " + userInput + " is not available in our bakery");
    // }
    // else {
    //     document.write(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery");
    // }

    // //task15
    // var password, message;
    // var whileCounter = 0;
    // var CFAL = false;
    // while (whileCounter != 1) {
    //     password = prompt("Enter Password");
    //     if (password.length <= 5) {
    //         alert("Must be 6 or more characters long");
    //     }
    //     else {
    //         if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
    //             alert("Password cannot begin with a number\nPlease enter a valid password");
    //         }
    //         else {
    //             for (var i = 0; i <= password.length-1; i++) {
    //                 if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
    //                     CFAL = true;
    //                     whileCounter = 1;
    //                     break;
    //                 }
    //                 else {
    //                     continue;
    //                 }
    //             }
    //             if (CFAL == true) {
    //                 whileCounter = 1;
    //                 message = "Password is OK.";
    //             }
    //             else {
    //                 whileCounter = 0;
    //                 message = "Invalid Password!\nYou must enter both lettes and numbers in your password.";
    //             }
    //             alert(message);
    //         }
    //     }
    // }

    // //task16
    // var university = "University of Karachi";
    // var splitted = university.split("");
    // for (i = 0; i < splitted.length; i++) {
    //     document.write(splitted[i] + "<br>");
    // }

    // //task17
    // var userInput = prompt("Enter any text here","Sample text");
    // document.write("User input: " + userInput + "<br>");
    // document.write("Last character of input: " + userInput.charAt(userInput.length-1));
    

    // //task18
    // var str = "The quick brown fox jumps over lazy the dog"
    // var spilitted = str.toLocaleLowerCase().split(" ");
    // var wordToFind = "the";
    // var occurances = 0;
    // for (var i = 0; i < spilitted.length; i++) {
    //     if(spilitted[i] == wordToFind) {
    //         occurances++;
    //     }
    // }
    // document.write("Text: " + str + "<br>");
    // document.write("There are '" + occurances + "' occurance(s) of word '" + wordToFind + "'");


//----------------- CHAPTER 26-30
    // //task1
    // var userInput = +prompt("Enter a positive integer");
    // document.write("Number: " + userInput + "<br>");
    // document.write("Round of value: " + Math.round(userInput) + "<br>");
    // document.write("Floor value: " + Math.floor(userInput) + "<br>");
    // document.write("Ceil value: " + Math.ceil(userInput));

    // //task2
    // var userInput = +prompt("Enter a negative integer");
    // document.write("Number: " + userInput + "<br>");
    // document.write("Round of value: " + Math.round(userInput) + "<br>");
    // document.write("Floor value: " + Math.floor(userInput) + "<br>");
    // document.write("Ceil value: " + Math.ceil(userInput));
    
    // //task3
    // var userInput = +prompt("Enter any number to see it's absolute value");
    // document.write("The absolute value of " + userInput + " is " + Math.abs(userInput));

    // //task4
    // var dice = Math.floor(Math.random() * 6) + 1;
    // document.write("Random dice value: " + dice + "<br>");

    // //task5
    // var coin = Math.floor(Math.random() * 2) + 1;
    // if (coin == 2) {    
    //     document.write(coin + "<br>");
    //     document.write("Random coin value: Heads");
    // }
    // else {
    //     document.write(coin + "<br>");
    //     document.write("Random coin value: Tails");    
    // }

    // //task6
    // var rand = Math.floor(Math.random() * 100) + 1;
    // document.write("Random number between 1 and 100: " + rand);

    // //task7
    // var userInput = prompt("Enter your weight in kilograms");
    // var possibleInputs = ["kgs","kilogram","kg","kilograms"];
    // var finalWeight;
    // for (var i = 0; i < possibleInputs.length; i++) {
    //     if (userInput.includes(possibleInputs[i])) {
    //         finalWeight = userInput.replace(possibleInputs[i]," kilograms");
    //         break;
    //     }
    //     else {
    //         finalWeight = userInput + " kilograms";
    //         continue;
    //     }
    // }
    // document.write("The weight of user is " + finalWeight);

    // //task8
    // var randSecret = Math.floor(Math.random() * 10) + 1;
    // // alert(randSecret); uncomment this line to see hidden number
    // var userInput = +prompt("Guess the right number between 1 to 10");
    // if (userInput == randSecret) {
    //     alert("Congratulations, You Won");
    // }
    // else {
    //     alert("Alas! You Lose\nPlease Try Again");
    // }


//----------------- CHAPTER 31-34
    // //task1
    // var currentDate = new Date();
    // document.write(currentDate);

    // //task2
    // var allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // var currentDate = new Date();
    // var currentMonth = currentDate.getMonth();
    // document.write("Current month: " + allMonths[currentMonth]);

    // //task3
    // var allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    // var currentDate = new Date();
    // var currentDay = currentDate.getDay();
    // alert("Today is " + allDays[currentDay].slice(0,3));

    // //task4
    // var allDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    // var currentDate = new Date();
    // var currentDay = allDays[currentDate.getDay()];
    // if (currentDay == "Sunday" || currentDay == "Saturday") {
    //     document.write("It’s Fun day");
    // }

    // //task5
    // var currentDate = new Date();
    // currentDate = currentDate.getDate();
    // if (currentDate < 16) {
    //     document.write("First fifteen days of the month");
    // } else {
    //     document.write("Last days of the month");
    // }

    // //task6
    // var currentDate = new Date();
    // var currentDateMilli = currentDate.getTime();
    // var dateBefore = new Date("Jan 01, 1970");
    // var dateBeforeMilli = dateBefore.getTime();
    // var diff = currentDateMilli - dateBeforeMilli;
    // var diffInMin = diff / (1000 * 60 * 60);
    // document.write("Current Date: " + currentDate + "<br>");
    // document.write("Elapsed milliseconds since January 1, 1970:  " + diff + "<br>");
    // document.write("Elapsed minutes since January 1, 1970:  " + diffInMin + "<br>");

    // //task7
    // var currentDate = new Date();
    // var currentHour = currentDate.getHours();
    // if (currentHour <= 12) {
    //     alert("It's AM");
    // } else {
    //     alert("It's PM");
    // }

    // //task8
    // var laterDate = new Date("Dec 31, 2020");
    // document.write("Later date: " + laterDate);

    // //task9
    // var ramadanStartDate = new Date("Apr 24, 2020");
    // var currentDate = new Date();
    // var diffTime = currentDate - ramadanStartDate;
    // var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 
    // document.write(diffDays + " days have passed since 1st Ramadan, 2020");
    
    // //task10
    // var yearBegDate = new Date("Jan 01, 2020");
    // var currentDate = new Date(prompt("Enter any date to calculate seconds from year start e.g.","Jun 21, 2020"));
    // var yearBegDateMilli = yearBegDate.getTime();
    // var currentDateMilli = currentDate.getTime();
    // var diff = yearBegDateMilli - currentDateMilli;
    // var diffInSeconds = Math.abs(diff / 1000);
    // document.write(diffInSeconds + " seconds had past since begining of 2020");

    // //task11
    // var currentDate = new Date();
    // document.write("Current date: " + currentDate + "<br>");    
    // var setHours = currentDate.setHours(15);
    // document.write("1 hour ago, it was: " + currentDate);

    // //task12
    // var currentDate = new Date();
    // var getCurrentYear = currentDate.getFullYear();
    // document.write("Current date: " + currentDate + "<br>");    
    // var setHours = currentDate.setFullYear(getCurrentYear-100);
    // document.write("100 years back, it was: " + currentDate);

    // //task13
    // var userAge = +prompt("Enter your age");
    // var currentDate = new Date();
    // var getCurrentYear = currentDate.getFullYear();
    // var birthYear = getCurrentYear - userAge;
    // document.write("Your age is " + userAge + "<br>");
    // document.write("Your birth year is " + birthYear + "<br>");

    // //task14
    // var allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    // var customerName = "Hasnain Shafeeq";
    // var currentMonnth = new Date().getMonth();
    // currentMonnth = allMonths[currentMonnth];
    // var noOfUnits = 410;
    // var chargesPerUnit = 16;
    // var lateAmount = 350;

    // document.write("<h2>K-Eletric Bill</h2>" + "<br>");
    // document.write("Customer Name: " + customerName + "<br>");
    // document.write("Month: " + currentMonnth + "<br>");
    // document.write("Number of Units: " + noOfUnits + "<br>");
    // document.write("Charges Per Unit: " + chargesPerUnit + "<br>");
    // document.write("<br>");
    // document.write("Net Amout Payable (within Due Date): " + noOfUnits*chargesPerUnit + "<br>");
    // document.write("Late Payment Surcharge: " + lateAmount + "<br>");
    // document.write("Gross Amout Payable (after Due Date): " + ((noOfUnits*chargesPerUnit)+lateAmount) + "<br>");
        

//----------------- CHAPTER 35-38
    //task1
    // PART 01

// function tellTime() {
//      var now = new Date();
//      var theHr = now.getHours();
//      var theMin = now.getMinutes();
//      alert("Current time: "+ theHr + ":" + theMin);
// }

// console.log(tellTime());

// PART 02
//  var first_name = prompt('enter your first name ');

// var second_name = prompt('enter your second name ');

// greetings(first_name,second_name);
// function greetings (a,b){
//     document.write('<h2>Hello my dear<h2> ' + a, '\n' ,b)
// }


// PART 03


// firstNumber = parseInt(firstNumber);
// var secondNumber = prompt("Enter Your Second Number");
// secondNumber = parseInt(secondNumber);
// function addNumbers(firstNumber, secondNumber) {
//     return (firstNumber + secondNumber);
// }
// alert('Addition of ' + firstNumber + ' and ' + secondNumber + ' is ' + addNumbers(firstNumber, secondNumber));

// Task_4 

// function add(num1, num2) {
//     return num1 + num2;
// }
// function min(num1, num2) {
//     return num1 - num2;
// }
// function mul(num1, num2) {
//     return num1 * num2;
// }
// function div(num1, num2) {
//     return num1 / num2;
// }
// function mod(num1, num2) {
//     return num1 % num2;
// }
// var firstNumber = prompt("Enter Your First Number");
// firstNumber = parseInt(firstNumber);
// var secondNumber = prompt("Enter Your Second Number");
// secondNumber = parseInt(secondNumber);
// var operator = prompt("Enter Operator\n1-Addition\n2-Subtraction\n3-Multiplication\n4-Division\n5-Modulus");
// if (operator == 1) {
//     alert('Addition of ' + firstNumber + ' and ' + secondNumber + ' : ' + add(firstNumber, secondNumber));
// }
// else if (operator == 2) {
//     alert('Subtraction of ' + firstNumber + ' and ' + secondNumber + ' : ' + min(firstNumber, secondNumber));
// }
// else if (operator == 3) {
//     alert('Multiplication of ' + firstNumber + ' and ' + secondNumber + ' : ' + mul(firstNumber, secondNumber));
// }
// else if (operator == 4) {
//     alert('Division of ' + firstNumber + ' and ' + secondNumber + ' : ' + div(firstNumber, secondNumber));
// }
// else if (operator == 5) {
//     alert('Modulus of ' + firstNumber + ' and ' + secondNumber + ' : ' + mod(firstNumber, secondNumber));
// }
// else {
//     alert('Wrong Operator!')
// }

// Task_5 

// var number = prompt("Enter a number to make its square");
// number = parseInt(number);
// function square(number) {
//     return number * number;
// }
// alert('Square of ' + number + ' is ' + square(number));

//  Task_6 

// var number = prompt("Enter a number to make its factorial");
// number = parseInt(number);
// function factorial(number) {
//     var fact = 1;
//     for (var i = 1; i <= number; i++)
//         fact = fact * i;
//     return fact;
// }
// alert('Factorial of ' + number + ' is ' + factorial(number));

// Task_7

// var startNumber = prompt("Enter a starting number");
// startNumber = parseInt(startNumber);
// var endNumber = prompt("Enter an ending number");
// endNumber = parseInt(endNumber);
// function counting(startNumber, endNumber) {
//     return;
// }
// document.write('Counting from ' + startNumber + ' to ' + endNumber + ' : <br>' + counting(startNumber, endNumber));

// document.write([...Array(5).keys()]);

//Task_8 
// var base = prompt('Enter base for calculating hypotenuse of triangle');
// var perpendicular = prompt('Enter perpendicular for calculating hypotenuse of triangle');
// var number = prompt('Enter a number for making its square');

// // Outer function for calculating hypotenuse of triangle
// function Hypotenuse(base, perpendicular) {
//     // Inner function for calculating sqaure of a number
//     function Square(number) {
//         return number * number;
//     }
//     alert('Square of ' + number + ' : ' + Square(number));

//     var hypotenuse = (base * base) + (perpendicular * perpendicular);
//     return Math.sqrt(hypotenuse);
// }
// alert('Hypotenuse of triangle: ' + Hypotenuse(base, perpendicular));

// Task_9 
// var width = 40;
// var height = 40;
// function areaRectangle(width, height) {
//     return width * height;
// }
// // i. Arguments as value
// alert('Area of Rectangle by using arguments as value : ' + areaRectangle(30, 30));
// // ii. Arguments as variables
// alert('Area of Rectangle by using arguments as variable : ' + areaRectangle(width, height));

//   Task_10 

// var string = prompt('Enter a string to check whether its palidrome or not');
// function Palindrome(string) {
//     var splitString = string.split("");
//     var reverseArray = splitString.reverse();
//     var joinArray = reverseArray.join("");
//     return joinArray;
// }
// var reverseString = Palindrome(string);
// if (reverseString == string) {
//     alert('The given string : (' + string + ') is palindrome');
// } else {
//     alert('The given string : (' + string + ') is not palindrome');
// }

//   Task_11 

// var str = prompt('Enter a string to convert into title case');
// function titleCase(str) {
//     var wordsArray = str.toLowerCase().split(/\s+/);
//     var upperCased = wordsArray.map(function (word) {
//         return word.charAt(0).toUpperCase() + word.substr(1);
//     });
//     return upperCased.join(" ");
// }
// alert('Your string after converted in title case: ' + titleCase(str))

//  Task_12 

// const str = prompt('Enter a string to to check which word is the longest');
// const strArray = str.split(" ");
// const sortedStrArray = strArray.sort(
//     (strA, strB) => {
//         return strB.length - strA.length;
//     });
// document.write('Original string: ' + str);
// document.write('<br>Largest word in a string: ' + sortedStrArray[0])

// Task_13 

// var str = prompt('Enter a string');
// var letter = prompt('Enter a letter to count the number of occurrence within the string');
// function char_count(str, letter) {
//     var letter_Count = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str.charAt(i) == letter) {
//             letter_Count += 1;
//         }
//     }
//     return letter_Count;
// }
// document.write('Sample arguments: ' + "'" + str + "'" + ',' + "'" + letter + "'")
// document.write('<br>Occurrence of ' + letter + ' : ' + char_count(str, letter));

//   Task_14 

// var radius = prompt('Enter radius for calculating circumference and area of circle');
// function calcCircumference(radius) {
//     return 2 * 3.142 * radius;
// }
// alert('The circumference of circle at ' + radius + ' is ' + calcCircumference(radius))
// function calcArea(radius) {
//     return 3.142 * (radius * radius);
// }
// alert('The area of circle at ' + radius + ' is ' + calcArea(radius))