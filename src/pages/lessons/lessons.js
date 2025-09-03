import { marked } from "marked";
import DOMPurify from "dompurify";
// Lessons Event Clavier
const inputTextElement = document.getElementById("input-text");
const renderKeyElement = document.getElementById("renderKey");
// console.log(inputTextElement);
inputTextElement.addEventListener("keyup", (eventDuclavier) => {
    // console.log(eventDuclavier);
    console.log("eventDuclavier.key", eventDuclavier.key);
    renderKeyElement.innerHTML = marked.parse(inputTextElement.value);
    // renderKeyElement.textContent += eventDuclavier.key;
});
