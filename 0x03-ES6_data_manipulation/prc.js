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
const a = new Map();

a.set('ss', 5);
a.set('tt', 77);

a.forEach((aa, bb) => {console.log(aa, bb)});