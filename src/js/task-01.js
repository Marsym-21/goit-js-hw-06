const listItems = document.querySelectorAll("li.item");
// console.log(listItems);

const quantityListItems = listItems.length;
console.log(`Number of categories: ${quantityListItems}`);

for (const items of listItems) {
	// console.log(items);
	const title = items.querySelector("h2");
	console.log(`Category: ${title.textContent}`);
	const lists = items.querySelector("ul");
	// console.log(lists);
	const quantityElements = lists.querySelectorAll("li").length;
	console.log(`Elements: ${quantityElements}`);
}
