const firstName = 'LP';
const surname = 'Dev';
const age = 22;
const weight = 76;
const heightM = 1.78;
let imc;
let yearBorn;


yearBorn = 2022 - age;
imc = weight / (heightM * heightM);

console.log(
    `${firstName} is ${age} years old. He born on ${yearBorn}, have \
${heightM} of heightM and your weight is ${weight}. Your IMC index is \
${imc}`
);