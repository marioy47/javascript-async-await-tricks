// src/photos-promise.js
const axios = require("axios");
const photosUrl = "https://jsonplaceholder.typicode.com/photos";

axios({
  url: photosUrl,
  method: "GET",
})
  .then((res) => {
    // Here is the main code of your application.
    console.log(res["data"]);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("End of the code");
