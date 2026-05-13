let tasks = ['Acordar', 'Estudar', 'Ir ao Banco', 'Dormir'];

for (let i = 0; i < tasks.length; i++) {
    if (i === 2) {
        tasks.splice(2, 1, 'Fazer compras');
        tasks.splice(3, 0, 'Limpar casa');
        tasks.splice(4, 0, 'Ler um livro', 'Refletir sobre a leitura.')
    };
};

console.log(tasks);
tasks.push