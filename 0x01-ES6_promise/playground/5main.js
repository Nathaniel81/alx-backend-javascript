function uploadPhoto(filename) {
	// return Promise.reject(`${filename} can not be processed`);
	return Promise.reject(new Error(`${filename} cannot be processed`));
}


console.log(uploadPhoto('guillaume.jpg'));
