/* =================== */
/*   ARROW FUNCTIONS   */
/* =================== */

/**
 * Exercise 1
 *
 * create an arrow function {isEqual} which takes 2 numbers as params
 * and return true if they are equal or false if not
 */

isEqual = (p1, p2) => {
    if (p1 === p2) {
        return true;
    }else{
        return false;
    }
}


/**
 * Exercise 2
 *
 * create an arrow function {isLessOrEqual0} which takes number as a param
 * and return true if it equals or less than 0 or false if not
 */

isLessOrEqual0 = theNumb => {
    return (theNumb <= 0) ? true : false;
}

/**
 * Exercise 3
 *
 * create an arrow function {timeToSeconds} that takes
 * 2 params. First - hours, second - minutes, and as a result
 * return amount of seconds.
 *
 * Don't forget to set default values for your params, 0 and 0
 * so you will not break your function if you forget to pass params
 */

timeToSeconds = (hr=0, min=0) => (min*60)+(hr*3600);

/**
 * Exercise 4
 *
 * create an arrow function {isGameWorthTheCandle} which
 * takes 3 params. probability, prize and
 * pay. If probability * prize is more than
 * pay then return true otherwise return false
 */

isGameWorthTheCandle = (prob, prize, pay) => (prob*prize > pay) ? true :  false;

/**
 * Exercise 5
 *
 * create an arrow function {longerString} that takes two strings
 * as parameters and returns the string which is longest. If the strings are
 * equal in length return the string "Equal!"
 */

longerString = (str1, str2) => {
    if (str1.length === str2.length){
        return "Equal!";
    }else if(str1.length > str2.length){
        return str1;
    }else{
        return str2;
    }
}