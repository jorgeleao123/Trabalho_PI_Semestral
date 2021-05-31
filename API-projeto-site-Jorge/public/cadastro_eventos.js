
var lista_pessoas = [];
var frase = '';
var cont = 1;

function cadastrar1() {
    var pessoas = String(inp_cadastro1.value);
    lista_pessoas.push(pessoas);
    result1.innerHTML='';
    for(var c = 0; c < lista_pessoas.length; c++) {
        c % 2 == 0 ?
            result1.innerHTML += `<div style="width: 240px; background-color: var(--third_bg); margin: 3px auto; padding-left: 8px; font-weight: bold""> ${lista_pessoas[c]} </div>`
            : result1.innerHTML += `<div style="padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`
    }
}

function limpar1() {
    result1.innerHTML = '';
    lista_pessoas = [];
}

function inverter1() {
    ++cont;
    result1.innerHTML = '';
    if(cont % 2 == 0) {
        for(var c = lista_pessoas.length -1; c >= 0; c--) {
            c % 2 == 0 ?
            result1.innerHTML += `<div style="width: 240px; background-color: var(--third_bg); margin: 3px auto; padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`
            : result1.innerHTML += `<div style="padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`;
        }
    } else {
        cadastrar1();
    }
}

function fim_cadastro1() {
    if(lista_pessoas.length == 0) {
        alert('Você não cadastrou nenhuma nova pessoa');
    } else {
        alert(`Foram cadastradas novas ${lista_pessoas.length} pessoas para participar do evento`);
        msg1.innerHTML = `<b style="color: var(--third)">Anote o evento em sua agenda para não perder a data</b>`;
    }
}

function cadastrar2() {
    var pessoas = String(inp_cadastro2.value);
    lista_pessoas.push(pessoas);
    result2.innerHTML='';
    for(var c = 0; c < lista_pessoas.length; c++) {
        c % 2 == 0 ?
            result2.innerHTML += `<div style="width: 240px; background-color: var(--third_bg); margin: 3px auto; padding-left: 8px; font-weight: bold""> ${lista_pessoas[c]} </div>`
            : result2.innerHTML += `<div style="padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`
    }
}

function limpar2() {
    result2.innerHTML = '';
    lista_pessoas = [];
}

function inverter2() {
    ++cont;
    result2.innerHTML = '';
    if(cont % 2 == 0) {
        for(var c = lista_pessoas.length -1; c >= 0; c--) {
            c % 2 == 0 ?
            result2.innerHTML += `<div style="width: 240px; background-color: var(--third_bg); margin: 3px auto; padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`
            : result2.innerHTML += `<div style="padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`;
        }
    } else {
        cadastrar2();
    }
}

function fim_cadastro2() {
    if(lista_pessoas.length == 0) {
        alert('Você não cadastrou nenhuma nova pessoa');
    } else {
        alert(`Foram cadastradas novas ${lista_pessoas.length} pessoas para participar do evento`);
        msg2.innerHTML = `<b style="color: var(--third)">Anote o evento em sua agenda para não perder a data</b>`;
    }
}

function cadastrar3() {
    var pessoas = String(inp_cadastro3.value);
    lista_pessoas.push(pessoas);
    result3.innerHTML='';
    for(var c = 0; c < lista_pessoas.length; c++) {
        c % 2 == 0 ?
            result3.innerHTML += `<div style="width: 240px; background-color: var(--third_bg); margin: 3px auto; padding-left: 8px; font-weight: bold""> ${lista_pessoas[c]} </div>`
            : result3.innerHTML += `<div style="padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`
    }
}

function limpar3() {
    result3.innerHTML = '';
    lista_pessoas = [];
}

function inverter3() {
    ++cont;
    result3.innerHTML = '';
    if(cont % 2 == 0) {
        for(var c = lista_pessoas.length -1; c >= 0; c--) {
            c % 2 == 0 ?
            result3.innerHTML += `<div style="width: 240px; background-color: var(--third_bg); margin: 3px auto; padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`
            : result3.innerHTML += `<div style="padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`;
        }
    } else {
        cadastrar3();
    }
}

function fim_cadastro3() {
    if(lista_pessoas.length == 0) {
        alert('Você não cadastrou nenhuma nova pessoa');
    } else {
        alert(`Foram cadastradas novas ${lista_pessoas.length} pessoas para participar do evento`);
        msg3.innerHTML = `<b style="color: var(--third)">Anote o evento em sua agenda para não perder a data</b>`;
    }
}

function cadastrar4() {
    var pessoas = String(inp_cadastro4.value);
    lista_pessoas.push(pessoas);
    result4.innerHTML='';
    for(var c = 0; c < lista_pessoas.length; c++) {
        c % 2 == 0 ?
            result4.innerHTML += `<div style="width: 240px; background-color: var(--third_bg); margin: 3px auto; padding-left: 8px; font-weight: bold""> ${lista_pessoas[c]} </div>`
            : result4.innerHTML += `<div style="padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`
    }
}

function limpar4() {
    result4.innerHTML = '';
    lista_pessoas = [];
}

function inverter4() {
    ++cont;
    result4.innerHTML = '';
    if(cont % 2 == 0) {
        for(var c = lista_pessoas.length -1; c >= 0; c--) {
            c % 2 == 0 ?
            result4.innerHTML += `<div style="width: 240px; background-color: var(--third_bg); margin: 3px auto; padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`
            : result4.innerHTML += `<div style="padding-left: 8px; font-weight: bold"> ${lista_pessoas[c]} </div>`;
        }
    } else {
        cadastrar4();
    }
}

function fim_cadastro4() {
    if(lista_pessoas.length == 0) {
        alert('Você não cadastrou nenhuma nova pessoa');
    } else {
        alert(`Foram cadastradas novas ${lista_pessoas.length} pessoas para participar do evento`);
        msg4.innerHTML = `<b style="color: var(--third)">Anote o evento em sua agenda para não perder a data</b>`;
    }
}

