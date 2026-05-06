
function recursive (max) {

    if (max === 200) {
        return console.log(`Fim - ${max}`)
    };

    console.log(max)    

    max++;

    recursive(max);
};


recursive(1)
