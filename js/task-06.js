const input = document.querySelector("#validation-input");

const getAttributeData = document.querySelector('input[data-length="6"]');

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
	const numberLength = Number.parseInt(getAttributeData.dataset.length);

	if (numberLength !== event.currentTarget.value.length) {
		input.classList.remove("valid");
		input.classList.add("invalid");
	}

	if (numberLength === event.currentTarget.value.length) {
		input.classList.add("valid");
		input.classList.remove("invalid");
	}
}
