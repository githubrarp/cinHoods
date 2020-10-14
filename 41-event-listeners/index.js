// OPEN index.html IN YOUR BROWSER
// CALL YOUR FUNCTIONS IN DEV TOOLS TO SEE CHANGES

/**
 * Exercise 1
 *
 * create a function {clickTheButton} which listens for a click
 * on a button inside div with class "click", and
 * logs a message in the console when a click occurs
 */

const clickTheButton = () => {
  const listening = document.querySelector("div.click");
  listening.addEventListener("click", () =>
    console.log("Logging to the console")
  );
};

/**
 * Exercise 2
 *
 * create a function {hoverOver} which listens for a hover over an
 * "a" tag inside div with class "mouseover" and logs a message in the console
 */

const hoverOver = () => {
  const listening = document.querySelector("div.mouseover");
  listening.addEventListener("mouseover", () =>
    console.log("Logging to console")
  );
};

/**
 * Exercise 3
 *
 * create a function {handleLeave} which listens for when the
 * cursor leaves the "a" tag inside div with class "mouseover"
 * and log a message in the console
 */

const handleLeave = () => {
  const listening = document.querySelector("div.mouseover");
  listening.addEventListener("mouseout", () =>
    console.log("Logging to console")
  );
};

/**
 * Exercise 4
 *
 * create a function {focusOnMe} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 */

const focusOnMe = () => {
  const listening = document.querySelector("input");
  listening.addEventListener("focus", () => console.log("Logging to console"));
};

/**
 * Exercise 5
 *
 * create a function {clickElsewhere} which will log a message in the console
 * when first you focus on input which is inside 'div' with class 'input'
 * and then click on anything else
 */

const clickElsewhere = () => {
  const listening = document.querySelector("div.input input");
  listening.addEventListener("blur", () => {
    console.log("Logging to console");
  });
};

/**
 * Exercise 6
 *
 * create a function {pressAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key
 */

const pressAKey = () => {
  const listening = document.querySelector("div.input");
  listening.addEventListener("keydown", () =>
    console.log("Logging to console")
  );
};

/**
 * Exercise 7
 *
 * create a function {releaseAKey} which will log a message in the console
 * when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

const releaseAKey = () => {
  const listening = document.querySelector("div.input");
  listening.addEventListener("keyup", () => console.log("Logging to console"));
};

/**
 * Exercise 8
 *
 * create a function {inputToUpperCase} which will convert value of input
 * to uppercase when you focus on input which is inside 'div' with class 'input'
 * and then press any key and release it
 */

const inputToUpperCase = () => {
  const input = document.querySelector("div.input input");
  input.addEventListener("keyup", () => {
    console.log(input.value.toUpperCase());
    input.value = input.value.toUpperCase();
  });
};

/**
 * Exercise 9
 *
 * create a function {handleSelectChange} which will log selected option value
 * in console when you select an option in "select" with id "items"
 */

const handleSelectChange = () => {
  const select = document.querySelector("#items");
  select.addEventListener('change', () => {
      console.log(select.value);
  });
};

/**
 * Exercise 10
 *
 * create a function {submitFormHandler} which will get values from form inputs
 * on submit, build an object where property names will be input names,
 * and values, input values and log it in the console
 */

const submitFormHandler = () => {
  const frm = document.querySelector('form');

  frm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstName = frm.querySelector("input[name='firstName']").value;
    const lastName = frm.querySelector("input[name='lastName']").value;
    obj = {firstName: firstName, lastName: lastName};
      console.log(obj);
  });
};

/**
 * Exercise 11
 *
 * create a function {handleScroll} which will get window vertical scroll position
 * on scroll, and log it in the console
 */

const handleScroll = () => {
  //    const listening = document.querySelector('window');
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
  });
};
