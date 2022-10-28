//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section [#]() –  (Notes, Lecture, Demo)
//

//

/* */ 

//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(a) – Hello World REPL (Notes)
//

/* Write some JavaScript code that will log the words Hello World! to the console: 
    Step 1: Understand the Problem
    Step 2: Make a Plan
    Step 3: Carry out the Plan
    Step 4: Look Back and Improve your Solution
*/ 

// 1. Represent the words Hello World! with a string. 
const string1 = "Hello World!";
//let helloworld = "Hello World!";

// 2. Use the method console.log() to print that string to the terminal. 
console.log(string1);
//console.log(helloworld);

// 3. Execute plan
let helloworld = "Hello World!";
console.log(helloworld); // Hello World!

// 4. Review & Consolidate 
console.log("Hello World!");




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(b) – The Number Data Type (Demo)
//

// Arithmetic Operations: 
console.log(1+1); // 2 
console.log(2.5-2); // 0.5 
console.log(3*4); // 12 
console.log(99/9); // 11 

console.log(9/2); // 4.5 
console.log(-3*3); // -9 

// Order of Operations => PEMDAS (parenthesis, exponents, multiplication, division, addition, subtraction) 
console.log(3+2*4); // 11
console.log((3+2)*4); // 20; "it will force that expression within the parenthesis to evaulate 1st"

// Modulo Operation: (%; shows remainder) 
console.log(22%5); // 4r2 => 2 
console.log(23%5); // 4r3 => 3 
console.log(24%5); // 4r4 => 4 
console.log(25%5); // 5r0 => 0 
console.log(26%5); // 5r1 => 1 

console.log(32%5); // 2 
console.log(23%11); // 1 
console.log(7%10); // 7; smaller number divided by a bigger number will give you a modulo = smaller number




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(b) – Numbers Exercise 
//

/* Write 5 examples of expressions using each of the operations: +, -, *, /, and %. 
   Print out the result of your expressions using console.log. 
   Be sure to test your work by running your code! 
*/ 

// Example:
console.log(4 + 2.5)  // 6.5

// Write 5 more expressions below:
console.log(1+2); 
console.log(3-4); 
console.log(5*6); 
console.log(7/8); 
console.log(9%10); 

// Some examples:
console.log(4 + 2.5)  // 6.5
console.log(100 - 20) // 80
console.log(4 * 0.5)  // 2
console.log(20 / 5)   // 4
console.log(13 % 3)   // 1




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(c) – The Boolean Data Type (Notes)
//

// The not (!) logical operator will reverse a boolean value: (unary operator)
console.log(!true);
console.log(!false);
console.log(!!false);

// The and (&&) logical operator will take two boolean values and will only evaluate to true when both input values are true.  Otherwise, it will return false:
console.log(false && false);
console.log(false && true);
console.log(true && false);
console.log(true && true);

// The or (||) logical operator will take two boolean values and will only evaluate to false when both input values are false.  Otherwise, it will return true:
console.log(false || false);
console.log(false || true);
console.log(true || false);
console.log(true || true);

// Logical Order of Operations: (! then && then ||)
console.log(true || (true && false)); // => (true || false) => (true)
console.log(false && !(false || true)); // => false && !(true) => false && false => false

/* 

// De Morgan's Law: 
A common mistake in boolean logic is to incorrectly distribute ! across parentheses. Say we had boolean values of A, B. Here is something to remember: 
– !(A || B) is equivalent to !A && !B 
– !(A && B) is equivalent to !A || !B 

In other words, to correctly distribute ! across parentheses, we must also flip the operation within parentheses. Beware that: 
– !(A || B) is NOT equivalent to !A || !B 
– !(A && B) is NOT equivalent to !A && !B 

We call this property De Morgan's Law. Shout out to Augustus De Morgan of Great Britain. 

*/ 




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(c) – The Boolean Data Type (Demo)
//

/* JavaScript Boolean Operators: 
    NOT (!)
    AND (&&)
    OR (||)
*/ 

// Practice Evaluation of Boolean Operations:
console.log(!true);   // false 
console.log(!!true);  // true; JS evaluates in steps; so reads !(false) in 1st step, then true in step 2. 

console.log(false && false); // false 
console.log(false && true);  // false 
console.log(true && true);   // true 

console.log(false || false); // false 
console.log(false || true);  // true 
console.log(true || true);   // true 

// Short-circuit Evaluation: 
console.log((!false && true) || !(false && true)); 
// console.log((true && true) || !(false)) 
// console.log(true || true) 
// console.log(true) 




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(c) – Boolean Exercise 
//

/* Write 3 examples of expressions using each of the operations: !, &&, ||. 
Print out the result of your expressions using console.log. 
Be sure to test your work by running your code! 
*/ 

// Example: 
console.log(false || false)   // false

// Write 3 more expressions below: 
console.log(!false); 
console.log(false && false); 
console.log(true || true); 

// Some examples:
console.log(false || false)   // false
console.log(!false)   // true
console.log(true || false)   // true
console.log(false && true)   // false




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(d) – Variables (Notes)
//

// Initializing a Variable:
  /* To initialize a variable in JavaScript we'll need two new pieces of syntax: let and =. 
     We can give the variable any name that we wish and assign it a value. 
     Once we initialize a variable, the variable will evaluate to the value assigned: 
  */
  let bootcamp = "App Academy";
console.log(bootcamp);

let birthYear = 2012;
console.log(birthYear);

/*
IMPORTANT: 
  JavaScript variables names can contain any alphanumeric characters, underscore (_), or dollar sign ($). However, they cannot begin with a number. 
*/

// Declaring a Variable:
/* Once a variable is declared, it will contain undefined as its value. 
     'undefined' is a common default value in JavaScript, and we'll see it come up in a few different places. 
     You can think of undefined as showing that the variable is empty. 
  */
let space;
console.log(space);

// Assigning a Variable:
// Once a variable has been declared, we can assign it a value using single-equals (=):
let space;
console.log(space);
space = "time and place";
console.log(space);

// Manipulating Variables:
// To change the value of a variable, we need to reassign it to a new value with = :
let num = 42;
console.log(num);

console.log(num + 8);

num = num + 10;
console.log(num);

// Assignment Shorthand:
// Changing the value of a number variable is something fairly common in the programming world. Luckily there is some shorthand operators we can use:
let number = 0;

number += 10; // number = number + 10  (number = 10)
number -= 2; // number = number - 2   (number = 8)
number /= 4; // number = number / 4   (number = 2)
number *= 7; // number = number * 7   (number = 14)

console.log(number); // 14

// We also have other shorthand to add or subtract exactly 1 from a variable, the increment (++) and decrement (--) operators:
let year = 3004;

year++;
console.log(year);

year--;
console.log(year);

// NaN: (Not a Number) – a common programming mistake***
let num;
console.log(num);
console.log(num + 3);
// num = 5;
// console.log(num);
// console.log(num + 3);

/* The above code gives NaN because the unassigned num variable contains undefined; adding 3 to undefined results in NaN. 
In general, any nonsensical arithmetic will result in NaN. 
Math operations involving undefined is perhaps the most common mistake: 
*/

console.log(undefined + 3);
console.log("fish" * 2);




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(d) – Variables (Demo) 
//

/* Variables: 
    - initialization 
    - declaration (let) 
    – assignment (=) 
*/ 

// Initialize a Variable: (syntax, keywords) 
let location = "New York"; 
console.log(location); 
//console.log("New York"); // => how the code is really evaulated*** 
  /* IMPORTANT:
     "Take the right-hand value and store it into the left-hand variable"
  */ 

// Indexing: 
let location = "New York"; 
console.log(location[1]); 
//console.log(location[0]); 

// Another way to initialize (declare & assign) a variable: 
let location; 
location = "SF"; 
console.log(location); 

// Variable Re-assignment: 
let age = 0; 
console.log(age);     // 0 
console.log(age + 5); // 5 
//age + 5;            // => 5 
console.log(age);     // 0; although line above prints out 5, the number stored in the variable is unmutable*** 

// Short-hand Variable Re-assignment: (can be done with all operators) 
let age = 0; 
console.log(age);       // 0 
age = age + 5;          // => 5; reassigning variable so that it stores the new value! 
//age += 5;             // using short-hand counter to update/reassign variable. 
console.log(age);       // 5 


let age = 0; 
console.log(age);       // 0 
age = age - 5;          // => -5; reassigning variable so that it stores the new value! 
//age -= 5;             // using short-hand counter to update/reassign variable. 
console.log(age);       // -5 

// Incrementing: 
let age = 0; 
console.log(age);       // 0 
age = age + 1;          // => 1; reassigning variable so that it stores the new value! 
//age ++;               // using short-hand counter to increment (+1) to a number variable. 
console.log(age);       // 1 


let age = 0; 
console.log(age);       // 0 
age = age - 1;          // => -1; reassigning variable so that it stores the new value! 
//age --;               // using short-hand counter to -1 to a number variable. 
console.log(age);       // -1 

// Undefined: 
let food; 
console.log(food); // undefined; because variable (above) is not assigned! 

// NaN: 
let food; 
console.log(food + 4); // NaN (Not a Number); can not add an 'undefined' variable to the number 4. 
//console.log("food" + 4); // => trying to perform arithmetic operations between strings & numbers is not possible. 




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(d) – Variables Practice 
//

/* Time to practice variables! 
   Follow the comments for instructions. 
   Be sure to test your work by running your code! 
*/ 

// Initial Code | Your Code: 
// 1. Declare a variable called `firstName` and assign it your first name as a string:
let firstName = "Justin"; 

// 2. Declare a variable called `lastName` and assign it your last name as a string:
let lastName = "Ramalho"; 

// 3. Declare a variable called `age`:
let age; 

// 4. Print out the `firstName`, `lastName`, and `age` variables. 
// What do you expect them to be when they get printed? => print 'Justin Ramalho undefined' (for age)
console.log(firstName, lastName, age); 

// 5. Assign the `age` variable to a number:
age = 32; 

// 6. Print out the `firstName`, `lastName`, and `age` variables. 
// What do you expect them to be when they get printed?  => print 'Justin Ramalho 32' 
console.log(firstName, lastName, age); 
//console.log(firstName lastName age); // removed commas to test/play around with console.log() command 

//console.log(firstName + lastName + age); // concatenating variables (+) to test/play around with console.log() command 
//console.log(firstName + "" + lastName + "" + age); // adding string spaces ("") to concatenated variables (+) to test/play around with console.log() command 
//console.log(firstName + " " + lastName + " " + age); // adding string spaces (" ") to concatenated variables (+) to test/play around with console.log() command 

// Solution: 
// 1. Declare a variable called `firstName` and assign it your first name as a string:
let firstName = 'App';

// 2. Declare a variable called `lastName` and assign it your last name as a string:
let lastName = 'Academy';

// 3. Declare a variable called `age`:
let age;

// 4. Print out the `firstName`, `lastName`, and `age` variables. What do you
//    expect them to be when they get printed?
console.log(firstName); // App
console.log(lastName); // Academy
console.log(age); // undefined

// 5. Assign the `age` variable to a number:
age = 8;

// 6. Print out the `firstName`, `lastName`, and `age` variables. What do you
//    expect them to be when they get printed?
console.log(firstName); // App
console.log(lastName); // Academy
console.log(age); // 8




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(e) – The String Data Type (Notes) 
//

// Writing a Valid String: ('' or "")
"potato"; 
"New York"; 
"justin@degreemaps.com"; 
"Following the yellow brick road, please!"; 
"365 days a year"; 
""; 
" "; 

  // valid strings: (enclosed in type of apostrophe that is opposite of char used in string, if applicable) 
  'Shakespeare wrote, "To be or not to be."'; 
  "That's a great string"; 

  // invalid strings: 
  'That's a bad string' 


// Calculating Length: (.length) 
console.log("ramen".length); 
console.log('go home!'.length); 
console.log("".length); 
console.log(" ".length); 


// Indexing a String: ([#]) 
console.log("bootcamp"[0]); 
console.log("bootcamp"[1]); 
console.log("bootcamp"[2]); 
console.log("bootcamp"[3]); 
console.log("bootcamp"[7]); 
console.log("bootcamp"[10]); 

console.log("bootcamp"[-1]); 
console.log("bootcamp"[-2]); 
console.log("bootcamp"[-3]); 
console.log("bootcamp"[-7]); 
console.log("bootcamp"[-10]); 

  /* IMPORTANT: In general, when we index a string using the expression string[i], we get back the single character at position i. 
     Looking at the last two examples above, if we use an invalid index with a string, the value returned is undefined. 
     This makes sense because there is no character at the given position! 
     It's also worth mentioning that an index should always be a number. 
  */


//console.log("bootcamp"[-0]); 


// The Classic "off by one" Error 
console.log("cat".length); 
console.log("cat"[3]); 

console.log("cat"[2]); 
//console.log("cat"[1]); 
//console.log("cat"[0]); 


// Using .indexOf(char) 
// We can also calculate the index of a given character within a string by using indexOf: 
console.log("bagel".indexOf("b")); 
console.log("bagel".indexOf("a")); 
console.log("bagel".indexOf("g")); 
console.log("bagel".indexOf("l")); 
console.log("bagel".indexOf("z")); // => -1 (read below!)

  /* IMPORTANT: If we attempt to search for a character that is not present in a string, indexOf will return -1. 
     This makes sense because we know that -1 is not a valid string index. 
     The smallest index possible is 0! 
  */ 


console.log("door hinge".indexOf("o")); 

  /* IMPORTANT: If we search for a character that appears more than once in a string, 
     indexOf will return the index of the first occurance of that character. 
  */ 


// We can also use indexOf to search for a substring of characters. 
// Under this circumstance, indexOf will return the index where the substring begins in the main string: 
console.log("door hinge".indexOf("do")); 
console.log("door hinge".indexOf("oor")); 
console.log("door hinge".indexOf("hi")); 
console.log("door hinge".indexOf("hint")); 


// Concatenation 
// Concatenation is just a fancy word for joining strings together into a single string. 
// To concatenate strings, we use the + operator: 
console.log("hello"+"world"); 
//console.log("hello"+""+"world"); 
//console.log("hello"+" "+"world"); 
console.log("goodbye" + " " +"moon"); 
//console.log("goodbye" + "" +"moon"); 
//console.log("goodbye"+"moon"); 




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 3(d) – String Type (Demo) 
//

  /* The String Data Type:
     - " or ' quotes 
     – .length 
     – [] indexing 
     – .indexOf() 
  */ 

// Wrapping a String: (accepts both single-quotes & double-quote; must be consistent!) 
console.log("ramen"); 
console.log('ramen'); 
//console.log("ramen'); 
//console.log('ramen"); 
console.log("Alvin's hungry"); 


// .length method 
console.log("boot"); 
console.log("boot".length); // 4 (characters) 

console.log("".length); // 0 characters; the "empty" string. 


// Indexing: (finding, pulling, using specific characters within the string)
console.log("boot"); 

console.log("boot"[0]); // b 
console.log("boot"[1]); // o 
console.log("boot"[2]); // o 
console.log("boot"[3]); // t 

console.log("boot"[4]); // 


console.log("boot"[1*2]); // o 
//console.log("boot"[2]); // => also gives your 'o' 

console.log("boot"[1+2]); // t 
//console.log("boot"[3]); // => also gives your 't' 


console.log("boot"["boot".length]); // undefined 
//console.log("boot"[4]); // => 4 is NOT an index of "boot" (consider characters vs. indexing). Therefore... 

console.log("boot"["boot".length - 1]); // => t
//console.log("boot"[3]); // => t 


// Using an Improper Index: 
console.log("potato"[20]); // undefined; "hey, there is no character at that position"

console.log("potato"[-3]); // smallest index is zero (0); there's no such thing as a negative index!


// indexOf() -- The Inverse: 
console.log("academy"); 

console.log("academy".indexOf("c")); // 1 
console.log("academy".indexOf("d")); // 3 
console.log("academy".indexOf("a")); // index 0 or index 2; always gives you back the smallest index (first showing within string) 

console.log("academy"[0]); 
console.log("academy".indexOf("u")); // if character is not within the string, it will return -1. 




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 4(a) – Functions () 
//

// : 





//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section 4(a) – Functions (Lecture) 
//

// Basic Concept: 


// Function Defintion Break Down: 


// Example Function Definition: 
// function definition
function thisIsMyName(); 

// Order of Code: 
function testMe() {
  console.log("test me please!"); 
}

testMe(); // => prints "test me please!" 

// Default Return Value: 
function addTwo (num1, num2) {
  num1 + num2; 
}

console.log(addTwo(1,2)); // => 


function addTwo (num1, num2) {
  return num1 + num2; 
}

console.log(addTwo(1,2)); // => 3

// Order of Running Code with the return Keyword: 
function testMe() {
  return true; 
  // anything below the first return will NOT be run! 

}

// Have Fun Writing Functions! // 




//
// Justin J Ramalho
//
// App Academy's Web Development Fundamentals' Prep Course
//
// Section [#]() –  (Notes, Lecture, Demo)
//

//

/* */ 
