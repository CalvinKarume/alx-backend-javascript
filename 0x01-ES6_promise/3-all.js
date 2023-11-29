import { createUser, uploadPhoto } from "./utils.js";

function handleProfileSignup() {
  return Promise.all([createUser(), uploadPhoto()])
    .then(([user, photo]) => {
      console.log(`body ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.error("Signup system offline");
    });
}

