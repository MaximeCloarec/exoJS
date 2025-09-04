import { timelineSteps } from "./timelineData.js";

export function renderTimeLine(timelineElementId) {
    const timelineElement = document.querySelector(timelineElementId);

    if (!timelineElement) {
        console.error(`Element with id ${timelineElementId} not found`);
        return;
    }
    timelineSteps.forEach((steps) => {
        const li = document.createElement("li");
        const divCircle = document.createElement("div");
        divCircle.classList.add("timeline-middle");

        divCircle.appendChild(createSvg());
        li.appendChild(divCircle);

        const div = document.createElement("div");
        div.classList.add(`timeline-${steps.side}`, "mb-10", "md:text-end");

        div.appendChild(createTime(steps));

        div.appendChild(createTextDiv(steps));

        const p = document.createElement("p");
        p.innerText = steps.text;
        div.appendChild(p);

        li.appendChild(div);

        return timelineElement.appendChild(li);
    });
}

function createSvg() {
    const svg = document.createElement("svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("viewBox", "0 0 20 20");
    svg.classList.add("h-5", "w-5");

    const path = document.createElement("path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute(
        "d",
        "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
    );
    path.setAttribute("clip-rule", "evenodd");
    svg.appendChild(path);

    return svg;
}

function createTime(steps) {
    const time = document.createElement("time");
    time.classList.add("font-mono", "italic");
    time.innerText = steps.year;
    return time;
}

function createTextDiv(steps) {
    const textDiv = document.createElement("div");
    textDiv.classList.add("text-lg", "font-white");
    textDiv.innerText = steps.title;
    return textDiv;
}
