const fs = require("fs");

const { atualizarPropostas } = require("../atualizarPropostas");
const readFile = () => {
  const content = fs.readFileSync("./data/propostas.json", "utf-8");
  return JSON.parse(content);
};

const getPropostas = (req, res) => {
  atualizarPropostas();
  const content = readFile();
  res.send(content);
};
const getPropostasById = (req, res) => {
  const { id } = req.params;
  const currentContent = readFile();
  const selectedItem = currentContent.findIndex((item) => item.id == id);

  atualizarPropostas();
  res.send(currentContent[selectedItem]);
};

module.exports = {
  getPropostas,
  getPropostasById,
};
