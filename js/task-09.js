function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const colorName = document.querySelector(".color");

button.addEventListener("click", () => {
	const color = `${getRandomHexColor()}`;
	bodyColor.style.backgroundColor = color;
	colorName.textContent = color;
});
