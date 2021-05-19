
function abrir_hamburguer() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change");
}

function enviar() {
    nome = String(inp_nome.value);
    email = String(inp_email.value);
    telefone = Number(inp_telefone.value);
    veiculos = Number(combo_veiculos.value);

    email.indexOf('@') == -1 || email.indexOf('.com') == -1 ? 
        alert('Email invalido') 
        : veiculos < 1 ?
            alert('Veiculo ainda não foi selecionado')
        : alert('Email cadastrado com sucesso');

}

function analisar() {
    nome = String(inp_nome.value);
    email = String(inp_email.value);
    telefone = Number(inp_telefone.value);
    veiculos = Number(combo_veiculos.value);

    email.indexOf('@') == -1 || email.indexOf('.com') == -1 ?
        inp_email.style.border = `1px solid red`
        : inp_email.style.border = `1px solid green`;
}