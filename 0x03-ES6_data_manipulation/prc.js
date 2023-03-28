// function cleanSet(set, startString) {
// 	let result = "";
// 	set.forEach((value) => {
// 	  if (value.startsWith(startString)) {
// 		result += value.slice(startString.length) + "-";
// 	  }
// 	});
	// Remove the trailing "-" character from the end
// 	return result.slice(0, -1);
//   }

// const person = new WeakMap();
// const ff = {'f': 3};
// person.set(ff, 8);

// console.log(person.get(ff));

const maxcalls = 5;
const weakMap = new WeakMap()

function queryAPI(endpoint) {
	if (!weakMap.has(endpoint)) {
		weakMap.set(endpoint, 0);
	}
	weakMap.set(endpoint, weakMap.get(endpoint) + 1);
}



const endpoint = { protocol: 'http', name: 'getUsers' };
weakMap.get(endpoint);

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
console.log(weakMap.get(endpoint));

queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
queryAPI(endpoint);
console.log(weakMap.get(endpoint));