const data = require("./public/data.json");

const getItems = () =>
  new Promise(function (resolve) {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

export default getItems;
