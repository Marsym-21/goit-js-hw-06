function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const colorName = document.querySelector(".color");
const text = document.querySelector(".title");
console.log(text.textContent);

button.addEventListener("click", () => {
	bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
	colorName.textContent = `${getRandomHexColor()}`;
	button.style.backgroundColor = `${getRandomHexColor()}`;
	text.style.color = `${getRandomHexColor()}`;
});
