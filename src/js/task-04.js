const value = document.querySelector("#counter span");

const decrementBtn = document.querySelector(' #counter button[data-action="decrement"]');

const incrementBtn = document.querySelector(' #counter button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener("click", () => {
	counterValue = counterValue - 100;
	value.textContent = counterValue;
	return value;
});

incrementBtn.addEventListener("click", () => {
	counterValue = counterValue + 100;
	value.textContent = counterValue;
	return value;
});

// console.log(counterValue);
// console.log(decrementBtn);
// console.log(incrementBtn);
