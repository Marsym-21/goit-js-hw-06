const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const list = document.querySelector("#ingredients");
console.log(list);

// let items;

for (const name of ingredients) {
	// console.log(name);
	const items = document.createElement("li");
	items.textContent = name;

	// console.log(items);

	list.insertAdjacentHTML("afterbegin", `<li class = item> ${items.textContent} </li>`);
}
