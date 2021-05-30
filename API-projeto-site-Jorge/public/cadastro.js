
var lista_pessoas = [];
var frase = '';
var cont = 1;

function cadastrar() {
    var pessoas = String(inp_cadastro.value);
    lista_pessoas.push(pessoas);
    result.innerHTML='';
    for(var c = 0; c < lista_pessoas.length; c++) {
        c % 2 == 0 ?
            result.innerHTML += `<div style="width: 240px; background-color: var(--third_bg); margin: 3px auto; padding-left: 8px"> ${lista_pessoas[c]} </div>`
            : result.innerHTML += `<div style="padding-left: 8px"> ${lista_pessoas[c]} </div>`
    }
}

function limpar() {
    result.innerHTML = '';
    lista_pessoas = [];
}

function inverter() {
    ++cont;
    result.innerHTML = '';
    if(cont % 2 == 0) {
        for(var c = lista_pessoas.length -1; c >= 0; c--) {
            c % 2 == 0 ?
            result.innerHTML += `<div style="width: 240px; background-color: var(--third_bg); margin: 3px auto; padding-left: 8px"> ${lista_pessoas[c]} </div>`
            : result.innerHTML += `<div style="padding-left: 8px"> ${lista_pessoas[c]} </div>`;
        }
    } else {
        cadastrar();
    }
}

function fim_cadastro() {
    alert(`Foram cadastradas novas ${lista_pessoas.length} para participar do evento`);
    msg.innerHTML = `Anote o evento em sua agenda para não perder a data`;
}
