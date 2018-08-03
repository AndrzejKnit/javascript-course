//Lecture: let and const

// ES5
/*
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/
//ES5
/*
function driverLicence(passedTest) {
    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
        console.log(firstName + ', born in' + yearOfBirth + ', lalal');
    }
}


driverLicence(true);

//ES6

function driverLicence6(passedTest) {
    console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';

    }
console.log(firstName + ', born in' + yearOfBirth + ', lalal');
}


driverLicence6(true);
*/
/*
let i =23;
for (let i = 0; i <5; i++) {
    console.log(i); // pokaże 4
}

console.log(i); // pokaże 23
*/
/*
// Blocks and IIFEs
//ES6
{
    const a = 1;
    let b = 2;
    var c=3;
}

//console.log(a+b);
console.log(c);

// ES5
(function() {
    var c=3;
})();

//console.log(c);
*/

