/**
 * Exercise 1
 *
 * create an event listener which will show
 * a popup(add class "open" to "popup")
 * when you double click on ".trigger"
 */

const trigger = document.querySelector(".trigger");
const popup = document.querySelector(".popup");

trigger.addEventListener("dblclick", () => {
  popup.classList.add("open");
});

/**
 * Exercise 2
 *
 * create an event listener which will toggle
 * zoom class on image when you double click on
 * image container(".img")
 */

const imageContainer = document.querySelector(".img");
const image = document.querySelector("img");

imageContainer.addEventListener("dblclick", () => {
  image.classList.toggle("zoom");
});

/**
 * Exercise 3
 *
 * create an event listener which will stop/start music player
 * when you switch tab/come back to the tab in the browser.
 *
 * NOTE: to test please interact with the page, and switch tabs
 */

const audio = document.querySelector("audio");

document.addEventListener("visibilitychange", () => {
if (!document.hidden) {
    audio.play();
} else {
    audio.pause();
}
});
