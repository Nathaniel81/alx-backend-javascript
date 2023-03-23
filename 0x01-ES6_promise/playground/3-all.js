const { uploadPhoto, createUser } = require('./utils')

function handleProfileSignup() {
	Promise.all([uploadPhoto(), createUser()])
	  .then((result) => console.log(result[0].body, result[1].firstName, result[1].lastName))
	  .catch(() => console.log('sdjhgfjh'));
}



module.exports = handleProfileSignup;

