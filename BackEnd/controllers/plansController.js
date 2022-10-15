const fs = require("fs");

const readFile = () => {
  const content = fs.readFileSync("./data/plans.json", "utf-8");
  return JSON.parse(content);
};

const getPlans = (req, res) => {
  const content = readFile();
  res.send(content);
};

module.exports = {
  getPlans,
};
