
function abrir_hamburguer() {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change");
}

var cont_curt = 0;

var num_curtidas = parseInt(Math.random() * 5000 + 1);
var num_descurtidas = parseInt(Math.random() * 5000 + 1);

curtidas.innerHTML = `${num_curtidas}`;
descurtidas.innerHTML = `${num_descurtidas}`;

function curtir() {
    ++cont_curt;
    cont_curt % 2 == 0 ?
        curtidas.innerHTML = `${num_curtidas + 1}`
        : (curtidas.innerHTML = `${num_curtidas}`, descurtidas.innerHTML = `${num_descurtidas}`);
}

function descurtir() {
    ++cont_curt;
    cont_curt % 2 == 0 ?
        descurtidas.innerHTML = `${num_descurtidas + 1}`
        : (descurtidas.innerHTML = `${num_descurtidas}`, curtidas.innerHTML = `${num_curtidas}`);
}

function comentar() {
    var comentario = String(inp_comentario.value);
    div_coment.innerHTML += `<span style="background-color: white;  
                            color: black; 
                            border-radius: 8px; 
                            text-align: center; 
                            padding: 8px;"> ${comentario} </span> <br> <br>`;
}

