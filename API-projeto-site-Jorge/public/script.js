
function abrir_hamburguer() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change");
}


var cont_curt = 0;

function curtir() {
    ++cont_curt;
    cont_curt % 2 == 0 ?
        curtidas.innerHTML = '0'
        : (curtidas.innerHTML = '1', descurtidas.innerHTML = '0');
}

function descurtir() {
    ++cont_curt;
    cont_curt % 2 == 0 ?
        descurtidas.innerHTML = '0'
        : (descurtidas.innerHTML = '1', curtidas.innerHTML = '0');
}

function comentar() {
    var comentario = String(inp_comentario.value);
    div_coment.innerHTML += `<span style="background-color: white;  
                            color: black; 
                            border-radius: 8px; 
                            text-align: center; 
                            padding: 8px;"> ${comentario} </span> <br> <br>`;
}


// function enviar() {
//     nome = String(inp_nome.value);
//     email = String(inp_email.value);
//     telefone = Number(inp_telefone.value);
//     veiculos = Number(combo_veiculos.value);

//     email.indexOf('@') == -1 || email.indexOf('.com') == -1 ? 
//         alert('Email invalido') 
//         : veiculos < 1 ?
//             alert('Veiculo ainda não foi selecionado')
//         : alert('Email cadastrado com sucesso');

// }
