// src/photos-promise-all.js
const axios = require("axios");
const photosUrl = "https://jsonplaceholder.typicode.com/photos";

const getPhotos = async () => {
  try {
    const res = Promise.all([
      `${photosUrl}/5`,
      `${photosUrl}/20`,
      `${photosUrl}/44`,
    ]);
    return res.map((item) => item.url);
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  await getPhotos();
  console.log("End of code");
})();
