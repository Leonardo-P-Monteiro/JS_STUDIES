const pontuacao = 49
// Isso é um operador ternário.
const eAlta = pontuacao > 70 ? 'Sim, é alta.' : 'Não, é baixa.'

// Isso é uma operação de curto-circuito.
const corFundo = '' // Significa um valor false
const corPadrao = corFundo || 'Preto' // Pra fazer no python é só substituir "||" por "or".

console.log(eAlta)
console.log(corPadrao)