const value = document.querySelector("#counter span");

const decrementBtn = document.querySelector(' #counter button[data-action="decrement"]');

const incrementBtn = document.querySelector(' #counter button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
	counterValue = counterValue - 1;
	value.textContent = counterValue;
	if (value.textContent < 0) {
		value.style.color = "tomato";
	}

	return value;
});

incrementBtn.addEventListener("click", () => {
	counterValue = counterValue + 1;
	value.textContent = counterValue;
	if (value.textContent > 0) {
		value.style.color = "green";
	}
	return value;
});

// console.log(counterValue);
// console.log(decrementBtn);
// console.log(incrementBtn);
