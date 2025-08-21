let mensagem = '    Hellow, World!';
console.log(mensagem);
console.log('trim '+mensagem.trim())
console.log('toUpperCase '+mensagem.toUpperCase())
console.log('toLowerCase '+mensagem.toLowerCase())
console.log('includes '+ mensagem.includes('e'))
console.log('includes '+ mensagem.includes('e', 14))
console.log('indexof '+ mensagem.indexOf('w', 1))
console.log('lastindexof '+ mensagem.lastIndexOf('l'))
console.log('substring '+ mensagem.substring(5, 9))
console.log('replace '+ mensagem.replace('l','9'))
console.log('replace '+ mensagem.replace(/Hellow/g, 'Hi'))
console.log(mensagem.split(' '))
console.log(mensagem.match('low'))
console.log(mensagem.slice(4, 9))


const myname = prompt('Digite seu nome completo: ');
document.body.innerHTML = `Seu nome é ${myname}. <br/>`;
document.body.innerHTML += `Seu nome tem ${myname.length} letras. <br/>`;
document.body.innerHTML += `A segunda letra do seu nome é: ${myname.charAt(1)}`;
document.body.innerHTML += `Qual o primeiro índice da letra "a" no seu nome? Está no índice ${myname.indexOf('a')}`;
document.body.innerHTML += `Qual o último índice da letra "a" no seu nome? Está no índice ${myname.lastIndexOf('a')}`;
document.body.innerHTML += `As últimas três letras do seu nome são: ${myname.slice(-4)}`;
document.body.innerHTML += `As palavras do seu nome são: ${myname.split(' ')}`;
document.body.innerHTML += `Seu nome em caixa alta: ${myname.toUpperCase()}`;
document.body.innerHTML += `Seu nome em lowercase: ${myname.toLowerCase()}`;