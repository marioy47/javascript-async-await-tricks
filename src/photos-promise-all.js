// src/photos-promise-all.js
const axios = require("axios");
const photosUrl = "https://jsonplaceholder.typicode.com/photos";

const getPhotos = async () => {
  try {
    const res = await Promise.all([
      axios({ url: `${photosUrl}/15`, method: "GET" }),
      axios({ url: `${photosUrl}/25`, method: "GET" }),
      axios({ url: `${photosUrl}/35`, method: "GET" }),
    ]);
    return res.map((item) => item["data"]);
  } catch (err) {
    console.error(err);
  }
};

(async () => {
  const photos = await getPhotos();
  console.log(photos);
})();
