// Capturar o evento de submit do formulário


/*
AGORA VAMOS FAZER A ÚLTIMA PARTE DO PROJETO QUE É A INSERÇÃO DA TABELA
DE ANÁLISE DOS PESOS. 46:47
*/


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
    }

    const imc = getIMC(peso, altura);
    const nivelIMC = getNivelIMC(parseFloat(imc));
    // setResultado('', true)
    console.log(imc);
    console.log(nivelIMC);

});


// Função especializada no cálculo do IMC.
function getIMC (peso, altura) {
    const imc = peso / altura ** 2
    return imc.toLocaleString(
        'pt-BR',
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }
    )
};


// Função especializada em exibir a análise do IMC.
function getNivelIMC (imc) {
    // Lista de resultados da análise do IMC
    const nivel = [
        'Abaixo do peso',  //0
        'Peso normal',  // 1
        'Sobrepeso',  //2
        'Obesidade grau 1',  //3
        'Obesidade grau 2',  //4
        'Obesidade grau 3',  //5
    ];

    if (imc > 39.9) {
        return nivel[5];
    } else if (imc > 34.9) {
        return nivel[4];
    } else if (imc > 29.9) {
        return nivel[3];
    } else if (imc > 24.9) {
        return nivel[2];
    } else if (imc > 18.5) {
        return nivel[1];
    } else {
        return nivel[0];
    };
};


// Função especializada na criação de parágrafos.
function criaP () {
    const p = document.createElement('p');
    return p;
};


// Resultado do processamento dos dados do formulário.
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    if (!isValid) {
        const p = criaP();
        p.innerHTML = msg;
        resultado.append(p);
        };
};

