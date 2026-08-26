// ⚠️ Promise "pura". Sem estar dentro de uma função.
const minhaPromise = new Promise((resolve, reject) => {
    // Aqui colocamos a operação; seja síncrona ou assíncona.
    
    let aprovado = true;

    const resultadoSorteio = Math.random()
    if (resultadoSorteio <= 0.4) {
        aprovado = false;
    };

    if (aprovado) {
        // Se a operação concluir corretamente, chamamos o resolve.
        resolve('Dados da promise resolvida.')
    } else {
        // Se a operação não concluir como esperado, chamamos o reject.
        reject(new Error('Resultado quando não concluímos a ação que' +
            ' esperávamos. Então retorna o reject. Que pode ser um erro (mais indicado.'))
    };
});

minhaPromise
    .then((resultado_positivo) => {
        console.log(resultado_positivo)
    })
    .catch((resultado_negativo) => {
        console.log(resultado_negativo)
    })
    .finally(() => {
        console.warn('Finalizado.')
    });


// ⚠️ Promise dentro de função. Ou seja, que recebem argumentos.
function minhaFuncaoPromise (nome, idade) {
    return new Promise((resolve, reject) => {
        if (idade < 18) {
            return reject(new Error(`O usuário ${nome} tem ${idade} que é menor que `+
                `18 anos.`
            ));
        };
        
        return resolve(`Usuário ${nome} tem ${idade}.`)
    });
};

minhaFuncaoPromise('Leonardo', 18)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.warn(err)
    })
    .finally(() => {
        console.log('Finalizada função com promise.')
    });

// ⚠️ Métodos de Promises

Promise.allSettled([minhaPromise, minhaFuncaoPromise('Francisco', 17)])
    .then((result) => {
        result.forEach((resultadoIndividual) => console.log(resultadoIndividual))
    })
