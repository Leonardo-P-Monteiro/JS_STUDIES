// Objeto Arguments das funções
function testF () {
    var i = 0;
    for ( arg of arguments) {
        i++;
        console.log(arg, i);
    }
};

testF('Leonardo', 'Monteiro', 'Legal');


// Rest Operator

function lMonteiro (a, b=2, ...c) {
    var acumulate = 0;
    somaC = c.reduce((acumulador, atual) => acumulador + atual, 0);
    // for (let i of c) {
    //     acumulate += i
    // };
    // return a + b + acumulate;
    return a + b + somaC;
};

console.log('Resultado do lMonteiro', lMonteiro(1, 2, 3, 1))
