export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(console.log('Got a response from the API'));
}

/*function handleResponseFromAPI(promise) {
	promise.then(() => {
		console.log('Got a response from the API');
		return {
			status: 200,
			body: 'Success'
		};
	}).catch(() => {
		console.log('Got a response from the API');
		return new Error();
	});
}*/
