function fazGet(url) {
  const request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}
const data = fazGet("http://localhost:3000/propostas/");
const propostas = JSON.parse(data);
function convertJson(json) {
  const { id, beneficiarios, precoTotal } = json;
  const container = document.getElementById("accordionExample");
  const item = document.createElement("div");

  const accordion = `
 
  <div class="accordion-item">
  <h2 class="accordion-header" id="flush-headingOne">
 <button class="accordion-button " type="button" data-bs-toggle="collapse" 
 data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
   Id: &nbsp <b>${id}</b> &nbsp &nbsp Quantidade de Beneficiários:&nbsp <b> ${
    beneficiarios.length
  }</b> &nbsp &nbsp 1º Beneficiário: <b>&nbsp ${
    beneficiarios[0].nome
  } </b> &nbsp &nbsp Valor Total &nbsp<b> R$ ${precoTotal},00</b>
 </button>
 </h2>
 <div id="collapseOne" class="accordion-collapse
  collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
 <div class="accordion-body">
  <strong>ID:</strong> &nbsp ${id} <br>
   
   <strong>JSON: </strong>  <br>
   </div>
   ${JSON.stringify(beneficiarios)}
   </div> </div>
   
   <div class="container">
   <div class="row">
   <div class="col-3 " ><strong>Beneficiário</strong></div>
   <div class="col-3" ><strong>Idade</strong></div>
   <div class="col-3" ><strong>Plano</strong></div>
   <div class="col-3" ><strong>Valor Individual</strong></div>  </div></div>
   
    
   `;

  item.innerHTML = accordion;

  container.appendChild(item);
  for (let i = 0; i < beneficiarios.length; i++) {
    const tag = document.createElement("div");
    let textoTabela = ` 
    <div class="container">
    <div class="row">
    <div class="col-3">${beneficiarios[i].nome}</div>               
    <div class="col-3">${beneficiarios[i].idade}</div>
    <div class="col-3">${beneficiarios[i].nomePlano}</div>
    <div class="col-3">R$${beneficiarios[i].preco},00</div></div> `;
    tag.innerHTML = textoTabela;
    container.appendChild(tag);
  }
  const soma = document.createElement("div");
  let textoTabela = `               
  <div class="container">
  <div class="row">
  <div class="col-9"><strong>Valor Total:</strong></div>
  <div class="col-3"><strong>R$${precoTotal},00</strong></div> </div>
  `;
  soma.innerHTML = textoTabela;
  container.appendChild(soma);

  console.log(id);
}
propostas.map(convertJson);
convertJson(propostas[0]);
/*<div class="accordion-item">
<h2 class="accordion-header" id="headingOne">
<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
  Accordion Item #1
</button>
</h2>
<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
<div class="accordion-body">
  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
</div>
</div>
</div>*/
