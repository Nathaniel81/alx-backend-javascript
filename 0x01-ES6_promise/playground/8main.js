// function divideFunction(numerator, denominator) {
// 	return new Promise((resolve, reject) => {
// 		if (denominator) {resolve(numerator/denominator)}
// 		else {reject(new Error())}

// 	})
// }


// divideFunction(10, 2).then((result) => {
// 	console.log(result)
// }).catch(console.error(error))

function divideFunction(numerator, denominator) {
	if (denominator) {
	  return numerator / denominator;
	}
	throw new Error('cannot divide by 0');
  }

console.log(divideFunction(10, 0));
