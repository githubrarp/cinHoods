// **** DO NOT TOUCH THIS CODE ****
// ============================
const user = {};
// ============================

/**
 * Exercise 1
 *
 * add property "firstName" to "user" and assign any name
 */

user.firstName = 'Rik';

/**
 * Exercise 2
 *
 * add property "lastName" to "user" and assign any last name
 */

user.lastName = 'Rod';

/**
 * Exercise 3
 * create a function "addANewProperty" which takes
 * 2 params, first - property name and second - property value
 * and set a new property for 'user' object
 */

function addANewProperty(property_age, age){
    user[property_age] = age;
}