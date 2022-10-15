const fs = require("fs");
const { atualizarPropostas } = require("../atualizarPropostas");

const readFile = () => {
  const content = fs.readFileSync("./data/beneficiarios.json", "utf-8");
  return JSON.parse(content);
};

const writeFile = (content) => {
  const updateFile = JSON.stringify(content);
  fs.writeFileSync("./data/beneficiarios.json", updateFile, "utf-8");
};

const getBeneficiarios = (req, res) => {
  atualizarPropostas();
  const content = readFile();
  atualizarPropostas();
  res.send(content);
};

const getBeneficiariosById = (req, res) => {
  const { id } = req.params;
  const currentContent = readFile();
  const selectedItem = currentContent.findIndex((item) => item.id == id);

  atualizarPropostas();
  res.send(currentContent[selectedItem]);
};

const addBeneficiario = (req, res) => {
  try {
    const { nomes, idades, planos } = req.body;
    const currentContent = readFile();
    const id = Math.random().toString(32).substr(2, 9);
    const qtdBeneficiarios = nomes.length;
    currentContent.push({ id, nomes, idades, planos, qtdBeneficiarios });
    writeFile(currentContent);
    res.send({ id, nomes, idades, planos, qtdBeneficiarios });
  } catch {
    res.send("ocorreu um erro, verique os dados e tente novamente");
  } finally {
    readFile();
    atualizarPropostas();
  }
};

const updateBeneficiario = (req, res) => {
  try {
    const { id } = req.params;
    const { nomes, idades, planos, qtdBeneficiarios } = req.body;
    const currentContent = readFile();
    const selectedItem = currentContent.findIndex((item) => item.id === id);
    const {
      id: cId,
      nomes: cnomes,
      idades: cIdades,
      planos: cplanos,
      qtdBeneficiarios: cQtdBeneficiarios,
    } = currentContent[selectedItem];
    const newObject = {
      id: cId,
      nomes: nomes ?? cnomes,
      idades: idades ?? cIdades,
      planos: planos ?? cplanos,
      qtdBeneficiarios: qtdBeneficiarios ?? cQtdBeneficiarios,
    };
    currentContent[selectedItem] = newObject;
    writeFile(currentContent);
    res.send(newObject);
  } catch {
    res.send(
      "não foi possível atualizar o Beneficiário, verifique os dados e tente novamente."
    );
  } finally {
    atualizarPropostas();
  }
};

const deleteBeneficiario = (req, res) => {
  try {
    const { id } = req.params;
    const currentContent = readFile();
    const selectedItem = currentContent.findIndex((item) => item.id === id);
    currentContent.splice(selectedItem, 1);
    writeFile(currentContent);
    res.send(true);
  } catch {
    res.send(
      "não foi possível deletar o registro, verifique o id e tente novamente"
    );
  } finally {
    atualizarPropostas();
  }
};

module.exports = {
  getBeneficiarios,
  getBeneficiariosById,
  addBeneficiario,
  updateBeneficiario,
  deleteBeneficiario,
};
