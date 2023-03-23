const signUpUser = require('./4-user-promise');
const uploadPhoto = require('./5-photo-reject');


function handleProfileSignup(firstName, lastName, fileName) {
	return Promise.allSettled([
		signUpUser(firstName, lastName),
		uploadPhoto(fileName)
	]).then((result) => result.map((r) => ({
		status: r.status,
		value: r.status === 'fulfilled' ? r.value : String(r.reason),
	}))
	);
}

module.exports = handleProfileSignup;


