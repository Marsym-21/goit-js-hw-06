const input = document.querySelector("#validation-input");

const getAttributeData = document.querySelector('input[data-length="6"]');

console.log(getAttributeData.dataset.length);

input.addEventListener("blur", () => {
	console.log(input.value.length);
	input.classList.add("invalid");
	if (input.value.length == getAttributeData.dataset.length) {
		input.classList.remove("invalid");
		input.classList.add("valid");
	}

	console.log(input);
});
