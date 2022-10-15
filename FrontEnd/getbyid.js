function fazGet(url) {
  const request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}
function buscaById() {
  try {
    let ide = document.getElementById("ide").value;
    if (ide != "") {
      const data = fazGet(`http://localhost:3000/propostas/${ide}`);
      const proposta = JSON.parse(data);
      console.log(proposta);
      const { beneficiarios, precoTotal } = proposta;

      let tabelaBeneficiarios = document.getElementById(
        "tabelaBeneficiariosId"
      );
      for (let i = 0; i < beneficiarios.length; i++) {
        const tag = document.createElement("tbody");
        let textoTabela = `<th id="tabelaIniciada" scope="col">${beneficiarios[i].nome}</th>
                        <th scope="col">${beneficiarios[i].idade}</th>
                        <th  scope="col">${beneficiarios[i].nomePlano}</th>
                        <th  scope="col">R$${beneficiarios[i].preco},00</th>`;
        tag.innerHTML = textoTabela;
        tabelaBeneficiarios.appendChild(tag);
      }
      const soma = document.createElement("tbody");
      let textoTabela = `<th  scope="col"></th>
                      <th scope="col"></th>
                      <th  scope="col">Valor Total:</th>
                      <th  scope="col">R$${precoTotal},00</th>`;
      soma.innerHTML = textoTabela;
      tabelaBeneficiarios.appendChild(soma);
    } else {
      window.alert("Erro:Preencha um id para buscar!");
    }
  } catch {
    window.alert("Não foi encontrada nenhuma entrada para esse id!");
  }
}
