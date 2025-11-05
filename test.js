// 1. Inicia a "chamada" para a URL da API
fetch('https://jsonplaceholder.typicode.com/todos')

    // 2. Quando a resposta inicial chegar...
    .then(response => {
        // ...nós a convertemos de "resposta HTTP" para "dados JSON".
        return response.json(); 
    })

    // 3. Quando a conversão para JSON terminar...
    .then(data => {
        // ...'data' agora é a lista de tarefas! 
        // Vamos exibir os dados no console para ver.
        console.log(data);
    });