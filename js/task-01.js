const listItems = document.querySelectorAll("li.item");
// console.log(listItems);

const quantityListItems = listItems.length;
console.log(`Number of categories: ${quantityListItems}`);

listItems.forEach(function (items, index) {
	// console.log(items);
	const title = items.firstElementChild;
	console.log(`Category: ${title.textContent}`);
	const lists = items.lastElementChild;
	// console.log(lists);
	const quantityElements = lists.querySelectorAll("li").length;
	console.log(`Elements: ${quantityElements}`);
});
