/**
 * Exercise 1
 * create a function {createAList}
 *
 * Requirements:
 * 1. create an unordered list with class "list"
 * 2. with 1 second interval add list item to ".list" element
 * 3. you should add only 5 list items.
 * 4. list item text should be "Item $"($ - position in the list)
 */

const createAList = () => {
  const body = document.querySelector("body");
  const list = document.createElement("ul");
  list.classList.add("list");

  let fiveTimesCount = 0;
  const fiveItemsList = setInterval(() => {
    const item = document.createElement("li");
    item.textContent = `Item ${fiveTimesCount}`;
    list.appendChild(item);
    fiveTimesCount++;
    if (fiveTimesCount == 5) {
      clearInterval(fiveItemsList);
    }
  }, 1000);

  body.appendChild(list);
};

/**
 * Exercise 2
 *
 * create a function {styleElement}
 *
 * Requirements:
 * 1. select the third list item from "".myList"
 * 2. set background to "green" color
 * 3. set color to "white"
 * 4. set font size to 2em
 */

const styleElement = () => {
  const myList = document.querySelector(".myList");
  const thirdItem = myList.children[2];
  thirdItem.style.backgroundColor = "green";
  thirdItem.style.color = "white";
  thirdItem.style.fontSize = "2em";
};

/**
 * Exercise 3
 *
 * create a function {removeLastChild}
 * Requirements:
 * 1. select last element from the ".myList"
 * 2. wait 2 seconds and remove the element from the list
 */

const removeLastChild = () => {
  const lastItem = document.querySelector(".myList").lastElementChild;

  setTimeout(function () {
    lastItem.remove();
  }, 2000);
};

/**
 * Exercise 4
 *
 * create a function {createAMessage} which takes a message as parameter
 *
 * Requirements:
 * 1. create p element with class "message"
 * 2. text should be your {message}
 * 2. add it to the DOM
 * 4. after 3s add class "visible"
 * 5. after another 3s add class "hide"
 * 6. after another 2s remove from DOM
 *
 * NOTE: check css file to see how we toggle styles
 * based on class "visible"
 */

const createAMessage = (message) => {
  const body = document.querySelector("body");
  const p = document.createElement('p');
  p.classList.add('message')
  p.innerText = message;
  body.appendChild(p);

  setTimeout(() => {
    p.classList.add('visible');
    setTimeout(() => {
      p.classList.add('hide');
      setTimeout(() => {
        p.classList.remove('message');
      }, 2000);
    }, 3000);
  }, 3000);  
};
