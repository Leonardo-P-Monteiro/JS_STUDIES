// Sintaxe completa do método.

// numeros.filter( (numeroAtual, posicao, listaInteira) => { return numeroAtual > 10 } );

// Simple Example
const arrayA = [1, 2, 3, 4, 5, 6]

const bigThan4 = arrayA.filter(value => value >= 4)

console.log(bigThan4)

// Seconde Example

const listaDeTarefas = [
  { titulo: "Estudar JavaScript", concluida: true },
  { titulo: "Pagar a conta de luz", concluida: false },
  { titulo: "Fazer mercado", concluida: false },
  { titulo: "Ler um livro", concluida: true }
];

const tarefasPendentes = listaDeTarefas.filter((tarefa) => tarefa.concluida === false)

console.log(tarefasPendentes)

// Aula Luiz Otávio

