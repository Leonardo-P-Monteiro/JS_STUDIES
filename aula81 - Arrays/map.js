// Exemplo simples
console.log("Exemplo simples.");

const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map((valor) => valor * 2);

console.log(dobrados);

// Exercício
console.log('\nExecício\n')

const tarefas = [
  { titulo: "Estudar Map", concluida: true },
  { titulo: "Praticar Exercícios", concluida: false },
];

// ESCREVA SEU MAP AQUI

const statusTarefa = tarefas.map(function (valor) {
  if (valor.concluida) {
    return `${valor.titulo}: Concluído.`;
  } else {
    return `${valor.titulo}: Não concluído.`;
  }
});

const statusTarefaTernario = tarefas.map(valor => valor.concluida ? `${valor.titulo}: Tarefa concluída.` : `${valor.titulo}: Aguardando conclusão.`)

console.log('Versão padrão', statusTarefa, '\n')
console.log('Versão com ternário', statusTarefaTernario)
