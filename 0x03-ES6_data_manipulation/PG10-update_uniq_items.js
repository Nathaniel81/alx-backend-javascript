const groceriesList = require('./PG9-groceries_list');

function updateUniqueItems(mapobj) {
	mapobj.forEach((val, key) => {
		if (val === 1) {
			mapobj.set(key, 100);
		}
	});
}

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);

// Map {
// 	'Apples' => 10,
// 	'Tomatoes' => 10,
// 	'Pasta' => 1,
// 	'Rice' => 1,
// 	'Banana' => 5
// 