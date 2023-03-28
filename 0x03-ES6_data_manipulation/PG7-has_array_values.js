function hasValuesFromArray(set, array) {
	for (let elem of array) {
		if (!set.has(elem)) {
			return false;
		}
	}
	return true;
}

console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));