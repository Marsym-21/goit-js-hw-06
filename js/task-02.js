const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");

const newArray = ingredients.map(ingredient => {
	const items = document.createElement("li");
	items.textContent = ingredient;
	items.classList = "item";
	return items;
});

list.append(...newArray);
