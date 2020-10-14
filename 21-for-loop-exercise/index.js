const myName = "Ricardo"; // SET YOUR NAME

const visitors = ["Alex", "Mike", "Sam", "Rebeca", "Rosa"]; // Add at least 5 names

/**
 * Exercise 1
 *
 * create a function {greetVisitors} and inside it write for loop which
 * will greet all people from "visitors" for each person you should
 * console.log "Hi {name}, my name is {myName}!"
 */

function greetVisitors(){
    visitors.forEach(visitor => {
        console.log(`Hi ${visitor}, my name is ${myName}`);
    });
}


// ========================
const numbers = [2, 123, 13, 1, 6, 84, 23, 12, 45]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 2
 * Create a function {getElementIndex} that uses a for loop to find the index of a
 * given item in {numbers}.
 * If the item is not present, return a string "Item not found"
 */

// ========================

let toReturn;
let getElementIndex = ((given) => {
    if( numbers.includes(given) ){
        numbers.forEach(number =>{
            if( number == given ){
                toReturn = numbers.indexOf(given);
            }
        });
        return toReturn;
    }else{
        return "Item not found";
    }
});

/**
 * Exercise 3
 * Create a function {total} that will return sum of all numbers
 * from {numbers} array
 */
let r = 0;

function total(){
    return numbers.reduce((r, n) => {
        return r + n
    });
}


// ========================

const numbersForIndexes = [6, 2, 16, 23, 84, 21, 9, 3]; // DON'T TOUCH THIS LINE :)

/**
 * Exercise 4
 * Create a function {addIndex} that takes {numbersForIndexes} array,
 * and returns a new array which includes each number + it's index
*/

let newArray = [];

function addIndex(numbersForIndexes){
    for(k in numbersForIndexes){
        newArray.push( Number(numbersForIndexes[k]) + Number(k));
    }
    return newArray
}

addIndex(numbersForIndexes);


/*
let n = 0;
let newArray = [];
function addIndex(numbersForIndexes){
    for(const value in numbersForIndexes){
        newArray.push(value + n);
        n++;
    }
    return newArray;
}
*/
const forLowestNumber = [5, 234, 96, 34, -34, 0, 23]; // DON'T TOUCH THIS LINE :)
/**
 * Exercise 5
 *  create function {lowestNumber} which will return the lowest integer
 * from {forLowestNumber}
 */

let m;
function lowestNumber(){
    forLowestNumber.forEach( n => {
        if ( m == undefined || n < m){
            m = n;
        }
    });
    return m;
}