const textInput = document.querySelector("#name-input");

const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
	event.currentTarget.value.trim();
	textOutput.textContent = event.currentTarget.value;
	if (event.currentTarget.value === "") {
		textOutput.textContent = "Anonymous";
	}
}
