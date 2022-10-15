const url = "http://localhost:3000/beneficiarios/";
const nomes = [];
const idades = [];
const planos = [];

body = {
  nomes: nomes,
  idades: idades,
  planos: planos,
};

function Post() {
  let tabelaIniciada = document.getElementById("tabelaIniciada");

  if (tabelaIniciada != null) {
    console.log("Body=", body);
    const request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(JSON.stringify(body));

    request.onload = function () {
      console.log(this.responseText);
    };
    window.alert("Proposta Cadastrada com sucesso");
    location.reload();
  } else {
    console.log("Erro: A proposta precisa ter pelo menos um beneficiário");
    window.alert("Erro: A proposta precisa ter pelo menos um beneficiário");
  }
}

function addBeneficiario() {
  event.preventDefault();
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  let plano = document.getElementById("plano").value;
  let tabelaBeneficiarios = document.getElementById("tabelaBeneficiarios");
  const tag = document.createElement("tbody");
  let textoTabela = `<th id="tabelaIniciada" scope="col">${nome}</th>
  <th scope="col">${idade}</th>
  <th  scope="col">${plano}</th>`;

  if (nome == "" || idade == "") {
    window.alert("Erro: Adicionar pelo menos um beneficiário à proposta");
    console.log("favor preencher os planos");
  } else {
    console.log(`nome: ${nome}, idade:${idade}, plano:${plano}`);
    nomes.push(nome);
    idades.push(idade);
    planos.push(plano);

    tag.innerHTML = textoTabela;
    tabelaBeneficiarios.appendChild(tag);
  }
}
//fazPost(url, body);
