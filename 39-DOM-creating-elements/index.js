// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {createDOMElement} which takes a tag name
 * as an argument and returns a new DOM element.
 *
 * NOTE: we will use this function for other exercises.

function createDOMElement(tag){
    return createdElement;
}
 */

const createDOMElement = tag => createdElement = document.createElement(tag);

/**
 * Exercise 2
 *
 * create a function {addPTag} which takes some text as an argument,
 * create a "p" tag which displays the text and appends it to
 * the body of the document
 */

//function addPTag(param)

const addPTag = param => {
    const pElement = document.createElement('p');
    const theBody = document.querySelector('body');
    pElement.innerText = param;
    theBody.append(pElement);
}

/**
 * Exercise 3
 *
 * create a function {addElementWithClass} which takes tag name,
 * text and class name as arguments. It should create an element
 * which displays the text and has the class and appends
 * the element to the body
 */

const addElementWithClass = (tag, txt, clss) =>{
    const bd = document.querySelector('body');
    const el = document.createElement(tag);
    el.classList.add(clss);
    el.innerText = txt;
    bd.append(el);
}

/**
 * Exercise 4
 *
 * create a function {addElementWithMultipleClasses} which takes tag name,
 * text and an array of classes. Create an element which displays the
 * text, has the array of classes and append it to the body
 */

const addElementWithMultipleClasses = (tag, txt, clss) => {
    const bd = document.querySelector('body');
    const el = document.createElement(tag);
    for(i=0; i<clss.length; i++){
        el.classList.add(clss[i]);
    }
    el.innerText = txt;
    bd.append(el);
}

/**
 * Exercise 5
 *
 * create a function {buildAList} which takes a few arguments
 * 1 - list type ("ul" or "ol")
 * 2 - a class for the list element
 * 3 - a number of li elements that need to be created
 *
 * Each li should have the text "Item $" (where $ is it's position)
 * Add the list element to the body
 */

const buildAList = (listType, clss, liNum) => {
    const listElement = document.createElement(listType);
    listElement.classList.add(clss);

    for (let i = 0; i < liNum; i++) {
        const listItem = document.createElement('li');
        listItem.innerText = `Item ${i}`;
        listElement.appendChild(listItem);
    }

    document.body.appendChild(listElement);

}

/**
 * Exercise 6
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {prependLiToList} which takes some text and
 * a class as arguments.
 *
 * Create a new li element which displays the text and has the class.
 *
 * Add that li to the list in your page, but the new li must be the
 * FIRST item in the list.
 *
 */

//const myList = buildAList('ul', '' , '1');

const prependLiToList = (txt, clss_args) => {

    const myList = document.querySelector('ul');

    const newLi = document.createElement('li');
    newLi.classList.add(clss_args);
    newLi.innerText = txt;

    myList.prepend(newLi);
    
}

/**
 * Exercise 7
 * !!! to test this function in your browser, first run {buildAList} !!!
 *
 * create a function {pushToSelectedPosition} which takes some text,
 * a class and a position (index).
 *
 * Create an li with the text and class.
 *
 * Add the li into the list at the position passed to this function.
 *
 */

function pushToSelectedPosition(txt, cls, pos){
    const myList = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerText = txt;
    li.classList.add(cls);
    myList.insertBefore(li, myList.children[pos]);
}

/**
 * Exercise 8
 *
 * create a function {deleteChildrenElements} which takes
 * a parent selector and an element selector
 *
 * Find the parent element, then remove any ancestors of that
 * element which match the element selector
 *
 */

const deleteSelectedElements = (parentSelector, elementSelector) => {
    const parent = document.querySelector(parentSelector);
    const children = parent.querySelectorAll(elementSelector);
    console.log(children);
    [...children].forEach(element => parent.removeChild(element));
}