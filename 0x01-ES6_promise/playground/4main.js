
// function signUpUser(firstName, lastName) {
// 	return new Promise((resolve) => {
// 		resolve({
// 			firstName,
// 			lastName
// 		});
// 	});
// }

function signUpUser(firstName, lastName) {
	return Promise.resolve({
		firstName,
		lastName
	});
}

console.log(signUpUser("Bob", "Dylan"));
