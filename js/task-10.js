function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const input = document.querySelector("input");
input.value = 0;
const buttonCreate = document.querySelector("button[data-create]");

const buttonDestroy = document.querySelector("button[data-destroy]");

const boxes = document.querySelector("#boxes");
const div = "<div></div>";
const numbersArray = [];

buttonCreate.addEventListener("click", () => {
	for (let i = 0; i < input.value; i += 1) {
		numbersArray.push(i);
		console.log(numbersArray);
	}
	const boxesArray = numbersArray.map(number => (number = div));
	boxes.insertAdjacentHTML("afterbegin", boxesArray.join(""));

	const newBoxes = document.querySelectorAll("#boxes div");
	console.log(newBoxes);

	for (let i = 0; i < newBoxes.length; i += 1) {
		const height = 30 + 10 * i;
		const width = 30 + 10 * i;
		const box = newBoxes[i];
		box.style.backgroundColor = `${getRandomHexColor()}`;
		box.style.height = `${height}px`;
		box.style.width = `${width}px`;
	}
});

const emptyArray = [];
buttonDestroy.addEventListener("click", () => {
	boxes.innerHTML = "";
	numbersArray.splice(0, numbersArray.length);
});
