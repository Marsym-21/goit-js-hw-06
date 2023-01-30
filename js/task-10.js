function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const input = document.querySelector("input");
const buttonCreate = document.querySelector("button[data-create]");

const buttonDestroy = document.querySelector("button[data-destroy]");

const boxes = document.querySelector("#boxes");
const numbersArray = [];

buttonCreate.addEventListener("click", () => {
	for (let i = 0; i < input.value; i += 1) {
		numbersArray.push(i);
	}
	numbersArray.map((number, index) => {
		const box = document.createElement("div");
		number = box;
		const height = 30 + 10 * index;
		const width = 30 + 10 * index;
		box.style.backgroundColor = `${getRandomHexColor()}`;
		box.style.height = `${height}px`;
		box.style.width = `${width}px`;
		boxes.append(box);
	});
});

buttonDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes() {
	boxes.innerHTML = "";
	numbersArray.splice(0, numbersArray.length);
	input.value = "";
}
