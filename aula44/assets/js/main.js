// Capturar o evento de submit do formulário
const form = document.querySelector("#formulario");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento Cancelado');
    setResultado('Resultado enviado.')
});


// Função especializada na criação de parágrafos.
function criaP () {
    const p = document.createElement('p');
    return p;
};


// Resultado do processamento dos dados do formulário.
function setResultado(msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
};

