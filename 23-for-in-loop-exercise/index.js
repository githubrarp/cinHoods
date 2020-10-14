/**
 * Exercise 1
 * create a function {logProperties} which will
 * take object as a param and console log each property in a format
 * "Property name: {propertyName}"
 */

function logProperties(obj){
    for(k in obj){
        console.log(`Property name: ${k}`);
    }
}

/**
 * Exercise 2
 * Create a function {getAllValues} that takes an object
 * and returns an array of all values.
 */

let allValues = [];

function getAllValues(obj){

    const keys = Object.keys(obj);

    keys.forEach( key => {
        allValues.push(obj[key]);
    });
    return allValues;
}

 
/**
 * Exercise 3
 * Create a function {getAllValuesAsString} that takes an object
 * and returns all values as one string with space separation.
 */

let theString = '';

function getAllValuesAsString(obj){
    for (key in obj){
        theString += obj[key] + ' ';
    }
    return theString.trim();
}


/**
 * Exercise 4
 * Create a function {propertyValueString} that takes object as a param
 * and log property and values as string in a next format:
 * "{key}: {value}"
 */

function propertyValueString(obj){
    for (k in obj){
        console.log(`${k}: ${obj[k]}`);
    }
}
 const obj = {
    nombre : 'Rik',
    apellido : 'Rod'
}
