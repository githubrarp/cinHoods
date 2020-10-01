/**
 * Exercise 1
 *
 * create a function {noStrings} that takes an array
 * as a parameter and return an array but without strings
 */

 noStrings = theArr =>{
     let resultingArr = [];
     theArr.filter(element => {
         if(typeof(element) != 'string'){
             resultingArr.push(element);
         }
     });
     return resultingArr;
 }

/**
 * Exercise 2
 *
 * create a function {justStrings} that takes an array
 * as a parameter and return an array of strings by removing
 * every other type
 */


justStrings = anArr =>{
        let resultingArr = [];
        anArr.filter(element => {
            if(typeof(element) === 'string'){
                resultingArr.push(element);
            }
        });
    return resultingArr;
}

/**
 * Exercise 3
 *
 * create a function {justStringsLongerThan5} that takes
 * an array as a parameter and return an array of strings
 * that are longer than 5 characters
 */

justStringsLongerThan5 = anArr =>{
    let resultingArr = [];
    anArr.filter(element => {
        if(typeof(element) === 'string' && element.length > 5){
            resultingArr.push(element);
        }
    });
return resultingArr;
}


/**
 * Exercise 4
 *
 * create a function {numbersMoreThan13} that takes
 * an array as a parameter and return an array of numbers
 * that are more than 13
 */

numbersMoreThan13 = anArr =>{
    let resultingArr = [];
    anArr.filter(element => {
        if(typeof(element) === 'number' && element > 13){
            resultingArr.push(element);
        }
    });
return resultingArr;
}


/**
 * Exercise 5
 *
 * create a function {objectsOnly} that takes
 * an array as a parameter and return an array of objects
 */

objectsOnly = anArr =>{
    let resultingArr = [];
    anArr.filter(element => {
        if(typeof(element) === 'object'){
            resultingArr.push(element);
        }
    });
return resultingArr;
}


/**
 * Exercise 6
 *
 * create a function {truthyOnly} that takes
 * an array as a parameter and return an array of truthy values.
 * IMPORTANT: You still need to keep number 0.
 */

const truthyOnly = anArr =>{
/*    let resultingArr = [];
    anArr.filter(element => {
        if(element || element == 0){
            console.log(typeof(element));
            resultingArr.push(element);
        }
    }); */

    const filteredArray = anArr.filter(item => item || item === 0);
    console.log(filteredArray);
    
return filteredArray;
}

// const truthyOnly = anArr => anArr.filter(item => item || item === 0);

