// src/photos-async-await.js
const axios = require("axios");
const photosUrl = "https://jsonplaceholder.typicode.com/photos";

const getPhotos = async () => {
  try {
    const res = await axios({ url: photosUrl, method: "GET" });
    console.log(res["data"]);
  } catch (err) {
    console.error(err);
  }
};

getPhotos();
console.log("End of code");
