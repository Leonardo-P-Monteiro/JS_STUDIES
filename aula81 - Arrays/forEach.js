// Forma isolada de uso
const frutas = ['laranja', 'banana', 'maçã']

frutas.forEach((value, index, array) => {
    console.log(`Posição: ${index}, Fruta: ${value}`)
})
console.log('==============================================')

// Contextualizada

const tarefa = [
    'Estudar métodos de array em JavaScrit',
    'Fazer exercícios de NodeList',
    'Refatorar a Calculadora de IMC',
]

tarefa.forEach((tarefaAtual, i, a) => {
    console.log(
        `[${i+1}] Montando na interface a tarefa: ${tarefaAtual}.`
    )
} )
