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