// Capturar o evento de submit do formulário
const form = document.querySelector("#formulario");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const peso = Number(inputPeso.value);
    const inputAltura = e.target.querySelector('#altura');
    const altura = Number(inputAltura.value);

    if (!peso || !altura) {
        setResultado('Altura ou peso não são valores válidos. Corrija.', false);
        return;
    };

});


// Função especializada na criação de parágrafos.
function criaP () {
    const p = document.createElement('p');
    return p;
};


// Resultado do processamento dos dados do formulário.
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.append(p);
    // ▶️ PARAMOS A AULA AQUI: 35:10 MINUTOS.
};

