const textInput = document.querySelector("#name-input");

const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", onInputChange);

function onInputChange(event) {
	event.currentTarget.value.split(" ").join("");

	// цей метод не працює ще метод trim, replace пробував теж не працюють, пробіли, як були так і лишаються, я не знаю як їх прибрати, підсказуйте.

	textOutput.textContent = event.currentTarget.value;
	if (event.currentTarget.value === "") {
		textOutput.textContent = "Anonymous";
	}
}
