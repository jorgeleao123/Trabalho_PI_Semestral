
var lista_pessoas = [];
var frase = '';

function cadastrar() {
    var pessoas = String(inp_cadastro.value);
    lista_pessoas.push(pessoas);
    frase += `${pessoas} <br>`;
    result.innerHTML = `${frase}`;
    
}

function fim_cadastro() {
    for (var c = lista_pessoas.length -1; c >= 0; c--) {
        msg.innerHTML += `${lista_pessoas[c]} <br>`;
    }
}
