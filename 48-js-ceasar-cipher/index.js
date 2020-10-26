const myAbcLowerStart = String.fromCharCode(...[...Array('z'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).keys()].map(i => i + 'a'.charCodeAt(0)));
const myAbcLowerEnd = String.fromCharCode(...[...Array('m'.charCodeAt(0) - 'a'.charCodeAt(0) + 1).keys()].map(i => i + 'a'.charCodeAt(0)));
const myAbcUpperStart = String.fromCharCode(...[...Array('Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));
const myAbcUpperEnd = String.fromCharCode(...[...Array('M'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));

let myAllLowerCase = myAbcLowerStart.concat(myAbcLowerEnd);
let myAllUpperCase = myAbcUpperStart.concat(myAbcUpperEnd);

const lowerCase = myAllLowerCase.slice(13);
const upperCase = myAllUpperCase.slice(13);


function encrypt(givenString) {

    const result = document.querySelector('.result');
    const spreadGivenString = [...givenString];

    spreadGivenString.forEach(letter => {

        if (upperCase.includes(letter)) {
            upperCase.indexOf(letter);
            resultingArray.push(myAbcUpperStart[parseInt(upperCase.indexOf(letter))]);
        } else if (lowerCase.includes(letter)) {
            lowerCase.indexOf(letter);
            resultingArray.push(myAbcLowerStart[parseInt(lowerCase.indexOf(letter))]);
        } else {
            resultingArray.push(letter);
        }
    });

    const encrypted = resultingArray.join('');
    console.log(encrypted);
    result.textContent = encrypted;
}


function decrypt(givenString) {

    const result = document.querySelector('.result');
    const spreadGivenString = [...givenString];

    spreadGivenString.forEach(letter => {

        if (myAbcUpperStart.includes(letter)) {
            myAbcUpperStart.indexOf(letter);
            resultingArray.push(upperCase[parseInt(myAbcUpperStart.indexOf(letter))]);
        } else if (myAbcLowerStart.includes(letter)) {
            myAbcLowerStart.indexOf(letter);
            resultingArray.push(lowerCase[parseInt(myAbcLowerStart.indexOf(letter))]);
        } else {
            resultingArray.push(letter);
        }
    });

    const decrypted = resultingArray.join('');
    console.log(decrypted);
    result.textContent = decrypted;
}

function rot13(){
    const btnEncrypt = document.querySelector('#encrypt');
    const btnDecrypt = document.querySelector('#decrypt');
    const givenString = document.querySelector('textarea').value;

    btnEncrypt.addEventListener('click', () => {
        resultingArray = [];
        encrypt(givenString);
    })

    btnDecrypt.addEventListener('click', () => {
        resultingArray = [];
        decrypt(givenString);
    })
}

rot13();