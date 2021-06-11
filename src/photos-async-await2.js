// src/photos-async-await.js
const axios = require("axios");
const photosUrl = "https://jsonplaceholder.typicode.com/photos";

/**
 * Queries the typicode jsonplaceholder API for photos
 *
 * @returns {Promise<object[]>}
 */
const getPhotos = async () => {
  try {
    const res = await axios({ url: photosUrl, method: "GET" });
    return res["data"];
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  await getPhotos();
  console.log("End of code");
})();
