const num = [1, 2, 3, 4, 5, 6];

for (let i of num) {
    if (i === 0) {
        continue;
    } else if ((i % 2) === 0) {
        console.log(i, '= Par.');
    } else if (i === 5) {
        break;
    } else {
        console.log(i, '= Ímpar');
    };
};