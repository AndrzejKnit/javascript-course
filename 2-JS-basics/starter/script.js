/*****************************
* Variables and data types
*/
/*
var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);
var job;
console.log(job);
job = 'Teacher';
console.log(job);
// Variable naming rules
var _3years = 3;
var johnMark = 'John and MArk';
var if = 23;
*/



/*****************************
* Variable mutation and type coercion
*/
/*
var firstName = 'John';
var age = 28;
// Type coercion
console.log(firstName + ' ' + age);
var job, isMarried;
job = 'teacher';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
// Variable mutation
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);
var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/***
 Basic operators
*/
/*
 var year, yearJohn, yearMark;
 now = 2018;
 ageJohn = 28;
 ageMark = 33;

 //Math operators
 yearJohn = now-28;
 yearMark = now - 33;

 console.log(yearJohn);

 console.log(now + 2);
 console.log(now * 2);
 console.log(now / 2);

 // Logical operators

 var johnOlder = ageJohn > ageMark;
 console.log(johnOlder);

 // typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'zgfkshgdkfsd');
var x;
console.log(typeof x);

 */

 /***********************
  * Operator precendence
  */
/*
  var now = 2018;
  var yearJohn = 1989;
  var fullAge= 18;
// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x,y);

//More operators

x = x *2;
x *= 2;
console.log(x);
x +=10;
console.log(x);
x = x +1;
x += 1;
x++;
console.log(x);
*/


var massMark, massJohn;
massMark = 78; // kg
massJohn = 92;
var heightMark, heightJohn;
heightMark = 1.69; // meters
heightJohn = 1.95;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

var isBmiHigher = bmiMark >= bmiJohn;

console.log(bmiMark, bmiJohn);
console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + isBmiHigher);

