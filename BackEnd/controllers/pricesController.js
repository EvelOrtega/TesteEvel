const fs = require("fs");

const readFile = () => {
  const content = fs.readFileSync("./data/prices.json", "utf-8");
  return JSON.parse(content);
};

const getPrices = (req, res) => {
  const content = readFile();
  res.send(content);
};

module.exports = {
  getPrices,
};
