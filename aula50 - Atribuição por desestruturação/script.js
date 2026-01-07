let a = "A";
let b = "B";
let c = "C";

const letras = [c, a, b];

[a, b, c] = letras;
const [ x, ...y] = letras;

// console.log(`Letra a = ${a}
// Letra b = ${b}
// Letra c = ${c}`);

console.log(`Letra X = ${x}
Letra Y = ${y}
`);
