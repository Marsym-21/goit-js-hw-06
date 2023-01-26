const input = document.querySelector("#font-size-control");

const inputMin = input.getAttribute("min");
const inputMax = input.getAttribute("max");

const text = document.querySelector("#text");

input.addEventListener("input", () => {
	text.style.fontSize = `${input.value}px`;
});
