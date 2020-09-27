/* ===================================== */
/* For these exercises use "for of" loop */
/* ===================================== */

/**
 * Exercise 1
 *
 * create a function {getIntegersOnly} which takes an array
 * as a param, get all integers from this array and return
 * a new array with these integers. If there is no integers it should return
 * empty array.
 */

function getIntegersOnly(givenArray){
let newArr = [];
   for (v of givenArray){
       if (Number.isInteger(v)){
           newArr.push(v);
       }
   }
   return newArr;
}

/**
 * Exercise 2
 * create a function {getEvenNumbers}, which takes an array of integers
 * and returns a new array with even numbers only, if there is no even
 * integers it should return an empty array
 */


function getEvenNumbers(givenArray){
let newArr = [];

    for (v of givenArray){
        if (Number.isInteger(v) && v%2 == 0){
            newArr.push(v);
        }
    }
    return newArr;
 }


/**
 * Exercise 3
 *
 * create a function {getEvenNumbersFromMixedArray},
 * which takes an array of values with different types and returns
 * a new array with even numbers only, if there is no even integers it
 * should return an empty array
 */

 
function getEvenNumbersFromMixedArray(givenArray){
let evenOnlyArray = [];
    for (v of givenArray){
        if( Number.isInteger(v) && v % 2 == 0){
            evenOnlyArray.push(v);
        }
    }
    return evenOnlyArray;
}


/**
 * Exercise 4
 * create a function {getOddNumbers}, which takes an array of integers
 * and returns a new array with odd numbers only, if there is no odd
 * integers it should return an empty array
 */

function getOddNumbers(givenArray){
    let newArr = [];
    for (v of givenArray){
        if (Number.isInteger(v) && v % 2 != 0){
            newArr.push(v);
        }
    }
    return newArr;
 }



/**
 * Exercise 5
 * create a function {evenOddTransform} which takes
 * array of integers as a param. Take each integer
 * and if it's odd add 1, if it's even subtract 1
 *
 * If your param is [1,2,3,4,5] the result should be
 * [2,1,4,3,6]
 */

let transf = [];

function evenOddTransform(x){
    for (v of x){
        if (Number.isInteger(v) && v%2 == 0){
            transf.push(v-1);
        }else{
            transf.push(v+1);
        }
    }
    return transf;
 }

