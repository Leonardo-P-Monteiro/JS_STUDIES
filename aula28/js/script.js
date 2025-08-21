const number = Number(prompt('Digite um número: '));
const numberTitle = document.getElementById('number-title');
const text = document.getElementById('text');

numberTitle.innerHTML = number;
text.innerHTML = ``;
text.innerHTML += `<p>Raiz quadrada: ${Number(Math.sqrt(number)).toFixed(4)}</p>`;
text.innerHTML += `<p>Ele é um inteiro: ${Number.isInteger(number)}</p>`;
text.innerHTML += `<p>Ele é um NaN: ${Number.isNaN(number)}</p>`;
text.innerHTML += `<p>Arredondado para baixo: ${Math.floor(number)}</p>`;
text.innerHTML += `<p>Arredondado para cima: ${Math.ceil(number)}</p>`;
text.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`;

