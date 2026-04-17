const bomDia = funcLearn('Bom dia,')
const boaTarde = funcLearn('Boa tarde,')
const boaNoite = funcLearn('Boa noite')

// Lembra do conceito de hoisting? 🤣
function funcLearn (a) {
return function (b) {
        return a + ' ' + b +'!'
    };
};

console.log(bomDia('Leonardo'))
console.log(boaTarde('Leonardo'))
console.log(boaNoite('Leonardo'))