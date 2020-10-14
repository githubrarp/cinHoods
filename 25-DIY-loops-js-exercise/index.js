const dataTypes = [
  4,
  "hello",
  "2",
  { name: "Alex" },
  54,
  "random",
  23,
  "kitten",
  13.21,
  [1, 2, 3, 4],
  { type: "boolean" },
  [32, 52],
  43.1,
];

/**
 * Exercise 1
 *
 * create a function {sortedData} which will take data as param
 * (you can use){dataTypes} and sort it by type:
 * 1. strings,
 * 2. integers,
 * 3. floats,
 * 4. arrays,
 * 5. objects
 *
 * and return object with property names equals types, and values should be
 * arrays with  corespondent data
 *
 * Ex: const data = [5, 'kitten', 3.12, 12]
 *
 * result:
 * {
 *  integers: [5, 12],
 *  strings: ['kitten'],
 *  floats: [3.12]
 * }
 */

function sortedData(dataTypes){
  let arrInt = [];
  let arrFloat = [];
  let arrString = [];
  let arrObject = [];
  let arrArray = [];

  result = {}

  for(data of dataTypes){
    switch (typeof(data)){
      case 'number':
        if(Number.isInteger(data)){
            arrInt.push(data);
        }else{
            arrFloat.push(data);
        }
        break;
      case 'string':
        arrString.push(data);
        break;
      case 'object':
        if(Array.isArray(data) ){
          arrArray.push(data);
        }else{
          arrObject.push(data);
        }
        break;
    }
  }

  result = {
      'integers' : arrInt,
      'strings' : arrString,
      'floats' : arrFloat,
      'objects' : arrObject,
      'arrays' : arrArray
  }
  
  return result;
}


/**
 * Exercise 2
 *
 * create a function {multipliedByNextNumber} which takes
 * an array of numbers and returns a new array where number equals
 * multiplication of number from passed array and the following number.
 * Presume that the following number for the last one is 1.
 *
 * Ex: pass [3,2,6]
 * result: [6, 12, 6]
 */

function multipliedByNextNumber(pass){
  resultingArray = [];

  for (key in pass){
      if(Number(key) == Number(pass.length-1)){
          resultingArray.push(pass[Number(pass.length-1)]);
      }else{
          resultingArray.push(pass[key]*pass[Number(key) + 1]);
      }
  }
  return resultingArray;
  
}


/**
 * Exercise 3
 *
 * create a function {multipliedEvenNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 2.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [24, 3, 48, 16, 5, 7]
 */

const multipliedEvenNumbers = (array) => {

  const evenNums = array.filter(num => num%2 === 0);
  
  const modifiedEvens = evenNums.map((num, index) => {
	return evenNums[index + 1] ? num * evenNums[index + 1] : num * 2;
  });
  
  const newArray = array.map(item=>
	item %2 ? item : modifiedEvens.shift()
  );
  
  return newArray;
};
 


/**
 * Exercise 4
 *
 * create a function {multipliedOddNumbers} which multiply
 * even number from passed array with following even number.
 * If there is no following even numbers, multiply by 1.
 *
 * return new numbers as new array
 *
 * ex: multipliedEvenNumbers([4,3,6,8,5,7])
 * result: [4, 15, 6, 8, 35, 7]
 */

const multipliedOddNumbers = (array) => {

  const oddNums = array.filter(num => num%2 === 1);
  
  const modifiedOdds = oddNums.map((num, index) => {
	return oddNums[index + 1] ? num * oddNums[index + 1] : num * 1;
  });
  
console.log(modifiedOdds);

  const newArray = array.map(item=>
	item %2 ? modifiedOdds.shift() : item
  );
  
console.log(array, newArray);

  return newArray;
};



/**
 * Exercise 5
 *
 * create a function {multipliedEvenOddNumbers} which will take
 * an array and type "even" or "odd".
 *
 * If you pass "even" do the same what you have for exercise 3
 * if you pass "odd" do the same what you have for exercise 4
 * else return original array.
 */

function multipliedEvenOddNumbers(arr, typ){
  if (typ == 'odd'){
    return multipliedOddNumbers(arr);
  }else if (typ == 'even'){
    return multipliedEvenNumbers(arr);
  }else{
    return arr;
  }
}