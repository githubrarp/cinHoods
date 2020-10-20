let step = 0;
let counter = 0;
let interval = null;

/**
 * Exercise 1
 *
 * create a function {action} which will take a {symbol} param: "+" or "-".
 * increment {counter} by {step} if you pass "+", or
 * decrement {counter} by {step} if you pass "-"
 *
 * NOTE: ".counter_value" should always represent the current value of {counter}
 */

const action = (symbol) => {
  if (symbol === "+") {
    counter += step;
  } else if (symbol === "-") {
    counter -= step;
  }

  const counterValue = document.querySelector(".counter_value");
  counterValue.innerText = counter;
};

/**
 * Exercise 2
 *
 * When the user clicks on "Set step" button, you need to:
 * 1. set {step} to the current value of input.
 * 2. reset value of input field to 1
 * 3. update value of ".step_value" to value of {step}
 *
 * NOTE: {step} should be an integer
 *
 *
 */

const form = document.querySelector(".step_form");
const input = document.querySelector("#step");
const stepValue = document.querySelector(".step_value");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  stepValue.innerText = parseInt(input.value);
  step = parseInt(input.value);
  input.value = 1;
});

/**
 * Exercise 3
 *
 * handle click on "#decrement" button and
 * decrement counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const decrementButton = document.querySelector("#decrement");

decrementButton.addEventListener("click", () => action("-"));

/**
 * Exercise 4
 *
 * handle click on "#increment" button and
 * increment counter by {step}
 *
 * NOTE: remember to use your {action} function
 */

const incrementButton = document.querySelector("#increment");

incrementButton.addEventListener("click", () => action("+"));

/**
 * Exercise 5
 *
 * when the user clicks on "#auto_decrement",
 * {counter} should be decremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */
const auto_decrement = document.querySelector("#auto_decrement");

const decrementalInterval = () => {
  return setInterval(function () {
    action("-");
  }, 1000);
};

auto_decrement.addEventListener("click", () => {
  clearInterval(interval);
  interval = decrementalInterval();
});

/**
 * el
 * Exercise 6
 *
 * when the user clicks on "#auto_increment",
 * {counter} should be incremented by {step} every second
 *
 * NOTE: ".counter_value" should represent current state of counter
 */

const auto_increment = document.querySelector("#auto_increment");

const incrementalInterval = () => {
  return setInterval(function () {
    action("+");
  }, 1000);
};

auto_increment.addEventListener("click", () => {
  clearInterval(interval);
  interval = incrementalInterval();
});

/**
 * Exercise 7
 *
 * when the user clicks on "#stop_auto",
 * the auto counter should stop
 */

const stop_auto = document.querySelector("#stop_auto");
stop_auto.addEventListener("click", () => {
  clearInterval(interval);
});
