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

/**************
 * Challenge 1
 */
/*
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
*/

/******
 * If / else statements
 */
/*
 var firstName = 'John';
 var civilStatus = 'single';

 if (civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
};

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
};


var massMark, massJohn;
massMark = 78; // kg
massJohn = 92;
var heightMark, heightJohn;
heightMark = 1.69; // meters
heightJohn = 1.95;

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiMark >= bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Marks\'s.');
}

*/

/*********
 * Boolean logic
 */
/*
 var firstName = 'John';
 var age = 20;
 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a yong man.');
} else {
     console.log(firstName + ' is a man.');
 }
 */

 /********
  * The Ternary operator and switch statements
  */
/*
  var firstName = 'John';
  var age = 16;

  //Ternary operators
  age >= 18 ? console.log(firstName + ' drinks beer.')
  : console.log(firstName + ' drinks juice.');

  var drink = age >= 18 ? 'beer' : 'juce';
  console.log(drink);
*/
  /*if (age >= 18) {
      var drink = 'beer';
  } else {
      var drink = 'juice';
  }*/
/*
  //Switch statement

  var job = 'instructor';
  switch (job) {
      case 'teacher':
      case 'instructor':
      console.log(firstName + ' teaches kids how to code.');
      break;
      case 'driver':
      console.log(firstName + ' drives an uber in Lisbon.');
      break;
      case 'designer':
      console.log(firstName + ' designs beautiful websites.');
      break;
      default:
      console.log(firstName + ' deoes somthing else.');
  }
age=28;
switch(true) {
    case age < 13:
    console.log(firstName + ' is a boy.');
    break;
    case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
    case (age >= 20 && age < 30):
    console.log(firstName + ' is a yong man.');
    break;
    default:
    console.log(firstName + ' is a man.');
}

 */

 /****************
  * Truhy and Falsy values
  */

  // falsy values: underfined, null 0, '', NaN
  // truthy values: NOT falsy values
/*
  var height;
  height = 23;
  if (height || height === 0) {
      console.log('Variable is defined');
  } else {
      console.log('Variable has NOT been defined');
  }

  //Equality operators

  if (height === '23') {
      console.log('The == operator does type coercion!');
  }

  */

  /*******
   * Challenge 2
   */
  /*
    var aveJohnTeam = (89 + 120 + 103) / 3;
    var aveMikeTeam = (116 + 94 + 123) / 3;
    var aveMaryTeam = (97 + 134 + 105) / 3;
//part 1
   if (aveJohnTeam > aveMikeTeam) {
       console.log('John\'s team win!' + aveJohnTeam + ' points');
   } else if (aveJohnTeam < aveMikeTeam) {
        console.log('Mike\'s team win!'  + aveMikeTeam + ' points');
   } else {
        console.log('There is a draw');
   }
// part 2
   if (aveJohnTeam > aveMikeTeam && aveJohnTeam > aveMaryTeam) {
    console.log('John\'s team win!' + aveJohnTeam + ' points');
   } else if (aveMikeTeam > aveJohnTeam && aveMikeTeam > aveMaryTeam) {
    console.log('Mike\'s team win!'  + aveMikeTeam + ' points');
   } else if (aveMaryTeam > aveJohnTeam && aveMaryTeam > aveMikeTeam) {
    console.log('Mary\'s team win!'  + aveMaryTeam + ' points');
   } else {
    console.log('There is a draw');
   }
   */



   /********
    * Functions
    */
/*
    function calculateAge(birthYear) {
        return 2018 - birthYear;
    }

   var ageJohn = calculateAge(1990);
   var ageMike = calculateAge(1948);
   var ageJane = calculateAge(1969);
    console.log(ageJohn, ageMike, ageJane);

    function yearsUntilRetirement(year, firstName)
    {
        var age = calculateAge(year);
        var retirement = 65 - age;

        if (retirement > 0) {
        console.log(firstName + ' retries in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    }

    yearsUntilRetirement(1990, 'John');
    yearsUntilRetirement(1948, 'Mike');
    yearsUntilRetirement(1969, 'Jane');

    */

    /****************
     * Function Statements and Expressions
     */

     // Function declaration
   // function whatDoYouDo(job, firstName) {}

// Function expression
     var whatDoYouDo = function(job, firstName) {
        switch(job) {
            case 'teacher':
            return firstName + ' teaches kids how to code';
            case 'driver':
            return firstName + ' drives a cab in Lisbon';
            case 'designer':
            return firstName + ' designs beautiful websites';
            default:
            return firstName + ' does somthing else';
        } 
     }

     console.log(whatDoYouDo('teacher', 'John'));
     console.log(whatDoYouDo('driver', 'Marry'));
     console.log(whatDoYouDo('designer', 'Adam'));
