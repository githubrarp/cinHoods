// OPEN index.html IN YOUR BROWSER
// OPEN DEV TOOLS, OPEN THE CONSOLE TAB
// CALL YOUR FUNCTIONS IN THE CONSOLE TO
// TEST YOUR CHANGES

/**
 * Exercise 1
 * create a function {setTitle} which takes a string as an argument
 * and displays it in the h1
 */

function setTitle(param){
    const h1 = document.querySelector('h1');
    h1.innerText = param;
    //h1.textContent = param;
}

/**
 * Exercise 2
 * create a function {appendToTitle} which takes a string as an argument
 * and appends it to existing h1 text
 */

appendToTitle = param => {
    const h1 = document.querySelector('h1');
    h1.innerText += param;
}



/**
 * Exercise 3
 * create a function {prependToTitle} which takes a string as an argument
 * and prepends it to existing h1 element text
 */

function prependToTitle(param){
    const h1 = document.querySelector('h1');
    h1.innerText = param + h1.innerText;
}

/**
 * Exercise 4
 * create a function {setInnerHTMLForDiv} which takes a tag name and text as
 * arguments and uses innerHTML to create an element inside the div, and the
 * text is displayed inside that element. The element should the tag name
 * passed into the function
 */

function setInnerHTMLForDiv(tag, txt){
    const newlyCreatedElement = document.createElement(tag);
    const div = document.querySelector('div');
    newlyCreatedElement.innerHTML = txt;
    console.log(newlyCreatedElement);
    div.appendChild(newlyCreatedElement);
}

/**
 * Exercise 5
 * create a function {addPtoDivWithText} which takes a string as an argument
 * and uses innerHTML to add a p tag containing the text into the div
 */

function pushPtoDivWithText(param){
    const theDiv = document.querySelector('div');
    theDiv.innerHTML += '<p>' + param + '</p>';
}

/**
 * Exercise 6
 *
 * create a function {setSrcToImage} which takes a url and image description
 * as arguments and set it as a src and alt attributes values
 * for existing img
 */

function setSrcToImage(url, description){
    const theImg = document.querySelector('img');
    theImg.setAttribute('src', url);
    theImg.setAttribute('alt', description);
}

/**
 * Exercise 7
 *
 * create a function {setCodersInHoodsLink} which takes 2 arguments, a URL
 * and some text
 *
 * Find the a tag in the page, set the href to the URL and display the text
 *
 * Also add an attribute that opens your page in a new tab
 */

function setCodersInHoodsLink(someUrl, someTxt){
    const theAtag = document.querySelector('a');
    theAtag.setAttribute('href',  someUrl);
    theAtag.innerText = someTxt;
    theAtag.setAttribute('target', '_blank');
}

/**
 * Exercise 8
 *
 * create a function {disableResetBtn} which will disable button
 * with class "reset"
 */

function disableResetBtn(){
    const resetButton = document.querySelector('button.reset');
    resetButton.setAttribute('disabled', 'true');
}

/**
 * Exercise 9
 *
 * create a function {disableBtns} which takes class name as an argument
 * and disable all buttons with this class name
 */

const disableBtns = className => {
    const allButtonNamedClassName = document.querySelectorAll(`.${className}`);
    [...allButtonNamedClassName].forEach(button =>{
        button.setAttribute('disabled', 'true');
    })
}

/**
 * Exercise 10
 *
 * create a function {addClassToLi} which adds the class
 * "list_item_$" (where $ is a position in a list) to each li
 * that is inside the ul with the class "list"
 *
 * NOTE: We've added some CSS so when your classes are added,
 * you will see a difference
 */

const addClassToLi = () =>{
    const list = document.querySelector('ul.list');
    const listItems = list.querySelectorAll('li');
    for (let index = 0; index < listItems.length; index++) {
        const listItem = listItems[index];
        listItem.classList.add(`list_item_${index}`);
    }
}


 /**
 * Exercise 11
 *
 *  create a function {removeListItemClass} which removes the class
 * "list_item" from all li elements with this class
 */

function removeListItemClass(){
    const list = document.querySelectorAll('li.list_item');
    for (let index = 0; index < list.length; index++) {
        const listItem = list[index];
        listItem.classList.remove(`list_item`);
        
    }
}

/**
 * Exercise 12
 *
 *  create a function {addId} which takes 2 arguments: an id and
 * a CSS selector. Use to selector to find an element, then add
 * the id to the element
 */

const addId = (id, selector) =>{
    const el = document.querySelectorAll(selector);
    for (let i = 0; i < el.length; i++) {
        const element = el[i];
            element.setAttribute('id', id);
    }
}

/**
 * Exercise 13
 *
 *  create a function {setStyles} which takes 3 arguments
 * 1 - a CSS property name,
 * 2 - property value,
 * 3 - a CSS selector
 *
 * use the selector to find all the elements which match, then
 * set the CSS property to the value
 */

const setStyles = (prop, value, selector) => {
    const elements = document.querySelectorAll(selector);

    [...elements].forEach(element => {
        element.setAttribute('style', `${prop}: ${value};`);
    });

}
/*
    for (let i = 0; i < el.length; i++) {
        const element = el[i];
    }
}
*/
// <img width = val> </img>