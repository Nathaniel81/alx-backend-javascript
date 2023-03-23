function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}
  
function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
 }

async function asyncUploadUser() {
  try {
    const uP = await uploadPhoto();
    const cU = await createUser();

    return {
      photo: uP,
      user: cU
    };
  } catch(err) {
      return { 
        photo: null, 
	user: null 
      };
    }
}

const test = async () => {
  const value = await asyncUploadUser();
  console.log(value);
};

test();
