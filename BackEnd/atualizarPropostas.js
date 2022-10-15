const fs = require("fs");

const beneficiarios = require("./data/beneficiarios.json");
const prices = require("./data/prices.json");
const plans = require("./data/plans.json");
const preçosCalculo = {
  codigo1Vidas1: prices[0],
  codigo1Vidas4: prices[1],
  codigo2Vidas1: prices[2],
  codigo3Vidas1: prices[3],
  codigo4Vidas1: prices[4],
  codigo5Vidas1: prices[5],
  codigo6Vidas1: prices[6],
  codigo6Vidas2: prices[7],
};
const planosCodigo = {
  codigo1: plans[0],
  codigo2: plans[1],
  codigo3: plans[2],
  codigo4: plans[3],
  codigo5: plans[4],
  codigo6: plans[5],
};

function registroToCodigo(registro) {
  let _codigo;
  if (registro == planosCodigo.codigo1.registro) {
    _codigo = planosCodigo.codigo1.codigo;
  }
  if (registro == planosCodigo.codigo2.registro) {
    _codigo = planosCodigo.codigo2.codigo;
  }
  if (registro == planosCodigo.codigo3.registro) {
    _codigo = planosCodigo.codigo3.codigo;
  }
  if (registro == planosCodigo.codigo4.registro) {
    _codigo = planosCodigo.codigo4.codigo;
  }
  if (registro == planosCodigo.codigo5.registro) {
    _codigo = planosCodigo.codigo5.codigo;
  }
  if (registro == planosCodigo.codigo6.registro) {
    _codigo = planosCodigo.codigo6.codigo;
  }
  return _codigo;
}

function registroToNomePlanos(registro) {
  let _plano;
  if (registro == planosCodigo.codigo1.registro) {
    _plano = planosCodigo.codigo1.nome;
  }
  if (registro == planosCodigo.codigo2.registro) {
    _plano = planosCodigo.codigo2.nome;
  }
  if (registro == planosCodigo.codigo3.registro) {
    _plano = planosCodigo.codigo3.nome;
  }
  if (registro == planosCodigo.codigo4.registro) {
    _plano = planosCodigo.codigo4.nome;
  }
  if (registro == planosCodigo.codigo5.registro) {
    _plano = planosCodigo.codigo5.nome;
  }
  if (registro == planosCodigo.codigo6.registro) {
    _plano = planosCodigo.codigo6.nome;
  }
  return _plano;
}

function gerarFaixa(idade) {
  if (idade > 0 && idade < 18) {
    return "faixa1";
  }
  if (idade > 18 && idade < 41) {
    return "faixa2";
  }
  return "faixa3";
}

function gerarPreco(codigoPlanos, qtdBeneficiarios, faixa) {
  let _preco;
  //Plano 1 faixa 1
  if (
    codigoPlanos == planosCodigo.codigo1.codigo &&
    qtdBeneficiarios <= 3 &&
    faixa == "faixa1"
  ) {
    _preco = preçosCalculo.codigo1Vidas1.faixa1;
  }
  if (
    codigoPlanos == planosCodigo.codigo1.codigo &&
    qtdBeneficiarios >= 4 &&
    faixa == "faixa1"
  ) {
    _preco = preçosCalculo.codigo1Vidas4.faixa1;
  }
  //Plano 1 faixa 2
  if (
    codigoPlanos == planosCodigo.codigo1.codigo &&
    qtdBeneficiarios <= 3 &&
    faixa == "faixa2"
  ) {
    _preco = preçosCalculo.codigo1Vidas1.faixa2;
  }
  if (
    codigoPlanos == planosCodigo.codigo1.codigo &&
    qtdBeneficiarios >= 4 &&
    faixa == "faixa2"
  ) {
    _preco = preçosCalculo.codigo1Vidas4.faixa2;
  }
  // Plano 1 faixa 3
  if (
    codigoPlanos == planosCodigo.codigo1.codigo &&
    qtdBeneficiarios <= 3 &&
    faixa == "faixa3"
  ) {
    _preco = preçosCalculo.codigo1Vidas1.faixa3;
  }
  if (
    codigoPlanos == planosCodigo.codigo1.codigo &&
    qtdBeneficiarios >= 4 &&
    faixa == "faixa3"
  ) {
    _preco = preçosCalculo.codigo1Vidas4.faixa3;
  }

  //plano 2 faixa 1
  if (codigoPlanos == planosCodigo.codigo2.codigo && faixa == "faixa1") {
    _preco = preçosCalculo.codigo2Vidas1.faixa1;
  }
  //plano 2 faixa 2
  if (codigoPlanos == planosCodigo.codigo2.codigo && faixa == "faixa2") {
    _preco = preçosCalculo.codigo2Vidas1.faixa2;
  }
  //plano 2 faixa 3
  if (codigoPlanos == planosCodigo.codigo2.codigo && faixa == "faixa3") {
    _preco = preçosCalculo.codigo2Vidas1.faixa3;
  }

  //plano 3 faixa 1
  if (codigoPlanos == planosCodigo.codigo3.codigo && faixa == "faixa1") {
    _preco = preçosCalculo.codigo3Vidas1.faixa1;
  }
  //plano 3 faixa 2
  if (codigoPlanos == planosCodigo.codigo3.codigo && faixa == "faixa2") {
    _preco = preçosCalculo.codigo3Vidas1.faixa2;
  }
  //plano 3 faixa 3
  if (codigoPlanos == planosCodigo.codigo3.codigo && faixa == "faixa3") {
    _preco = preçosCalculo.codigo3Vidas1.faixa3;
  }

  //plano 4 faixa 1
  if (codigoPlanos == planosCodigo.codigo4.codigo && faixa == "faixa1") {
    _preco = preçosCalculo.codigo4Vidas1.faixa1;
  }
  //plano 4 faixa 2
  if (codigoPlanos == planosCodigo.codigo4.codigo && faixa == "faixa2") {
    _preco = preçosCalculo.codigo4Vidas1.faixa2;
  }
  //plano 4 faixa 3
  if (codigoPlanos == planosCodigo.codigo4.codigo && faixa == "faixa3") {
    _preco = preçosCalculo.codigo4Vidas1.faixa3;
  }

  //plano 5 faixa 1
  if (codigoPlanos == planosCodigo.codigo5.codigo && faixa == "faixa1") {
    _preco = preçosCalculo.codigo5Vidas1.faixa1;
  }
  //plano 5 faixa 2
  if (codigoPlanos == planosCodigo.codigo5.codigo && faixa == "faixa2") {
    _preco = preçosCalculo.codigo5Vidas1.faixa2;
  }
  //plano 5 faixa 3
  if (codigoPlanos == planosCodigo.codigo5.codigo && faixa == "faixa3") {
    _preco = preçosCalculo.codigo5Vidas1.faixa3;
  }

  //Plano 6 faixa 1
  if (
    codigoPlanos == planosCodigo.codigo6.codigo &&
    qtdBeneficiarios <= 1 &&
    faixa == "faixa1"
  ) {
    _preco = preçosCalculo.codigo6Vidas1.faixa1;
  }
  if (
    codigoPlanos == planosCodigo.codigo6.codigo &&
    qtdBeneficiarios >= 2 &&
    faixa == "faixa1"
  ) {
    _preco = preçosCalculo.codigo6Vidas2.faixa1;
  }
  //Plano 6 faixa 2
  if (
    codigoPlanos == planosCodigo.codigo6.codigo &&
    qtdBeneficiarios <= 1 &&
    faixa == "faixa2"
  ) {
    _preco = preçosCalculo.codigo6Vidas1.faixa2;
  }
  if (
    codigoPlanos == planosCodigo.codigo6.codigo &&
    qtdBeneficiarios >= 2 &&
    faixa == "faixa2"
  ) {
    _preco = preçosCalculo.codigo6Vidas2.faixa2;
  }
  //Plano 6 faixa 3
  if (
    codigoPlanos == planosCodigo.codigo6.codigo &&
    qtdBeneficiarios <= 1 &&
    faixa == "faixa3"
  ) {
    _preco = preçosCalculo.codigo6Vidas1.faixa3;
  }
  if (
    codigoPlanos == planosCodigo.codigo6.codigo &&
    qtdBeneficiarios >= 2 &&
    faixa == "faixa3"
  ) {
    _preco = preçosCalculo.codigo6Vidas2.faixa3;
  }

  return _preco;
}

function gerarProposta(planilha) {
  const reducer = (accumulator, curr) => accumulator + curr;
  const { id, nomes, idades, planos } = planilha;
  const qtdBeneficiarios = nomes.length;
  const codigoPlanos = planos.map(registroToCodigo);
  const nomePlanos = planos.map(registroToNomePlanos);
  const faixa = idades.map(gerarFaixa);
  const precoIndividual = [];
  for (let i = 0; i < qtdBeneficiarios; i++) {
    precoIndividual.push(
      gerarPreco(codigoPlanos[i], qtdBeneficiarios, faixa[i])
    );
  }
  let precoTotal = precoIndividual.reduce(reducer);
  let output = {
    nomes: nomes,
    idades: idades,
    planos: planos,
    codigoPlanos: codigoPlanos,
    nomePlanos: nomePlanos,
    precoIndividual: precoIndividual,
    precoTotal: precoTotal,
    qtdBeneficiarios: qtdBeneficiarios,
    id: id,
  };

  return output;
}

function formatarPropostas(proposta) {
  const {
    nomes,
    idades,
    planos,
    codigoPlanos,
    nomePlanos,
    precoIndividual,
    precoTotal,
    qtdBeneficiarios,
    id,
  } = proposta;

  let propostaFormatada = {
    id: id,
    beneficiarios: [],
    precoTotal: precoTotal,
  };
  for (let i = 0; i < qtdBeneficiarios; i++) {
    let beneficiario = {
      nome: nomes[i],
      idade: idades[i],
      plano: planos[i],
      codigoPlan: codigoPlanos[i],
      nomePlano: nomePlanos[i],
      preco: precoIndividual[i],
    };
    propostaFormatada.beneficiarios.push(beneficiario);
  }

  return propostaFormatada;
}

function atualizarPropostas() {
  fs.readFileSync("./data/beneficiarios.json", "utf-8");
  const propostasProcessadas = beneficiarios
    .map(gerarProposta)
    .map(formatarPropostas);
  const propostasString = JSON.stringify(propostasProcessadas);
  fs.writeFileSync("./data/propostas.json", propostasString, "utf-8");
  console.table(propostasProcessadas);
}

/*
//tentei fazer assim, mas tive problemas com o mínimo de vidas
pessoas.map((pessoa) => {
    const planosFilteredByCode = planos.filter(
        (plano) => pessoa.plano.codigo === plano.codigo
    );
    const ordinatedPlanos = planosFilteredByCode.sort(
        (a, b) => a.minimo_vidas - b.minimo_vidas
    );
    const planoPessoa = ordernedPlanos.find(
        (plano) => pessoas <= plano.minimo_vidas
    );

    const faixaPessoa = gerarFaixa(pessoa.idade);
    const valorPagar = planoPessoa[faixaPessoa];
});*/

module.exports = {
  atualizarPropostas,
};
