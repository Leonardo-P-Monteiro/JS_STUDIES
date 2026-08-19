// Exemplo de Object.preventExtensions() -> Impede que NOVAS propriedades sejam implementadas no obj.
const obj1 = {a:1};
Object.preventExtensions(obj1);

obj1.b = 2; // Ignorando (não adiciona)
obj1.a = 99; // Sucesso (pode alterar as existentes)
// console.log(obj1)
delete obj1.a; // Sucesso (pode deletar as existentes)
// console.log(obj1)




// Object.seal() -> Impede inserção e deleção de propriedades. Apenas permite atualizar.
const obj2 = {moto:"honda", carro:"Fiat"};
Object.seal(obj2);

// console.log(obj2)

obj2.carro = 'Chery'; // Sucesso. Atualizou o valor da chave "carro".
// console.log(obj2)
delete obj2.carro; // Ignorado. Seal não permite que altere os valores. 
// console.log(obj2)




// Object.freeze() -> Impede tudo. Não altera nem deleta valores.
const obj3 = {
    nome: "Leonardo",
    idade: 30
};
Object.freeze(obj3);

// console.log(obj3)
obj3.nome = 'Francisco'; // Ignorado. Não permite atualização de valores.
// console.log(obj3)
delete obj3.idade; // Ignorado. Não permite deleção de propriedades.
// console.log(obj3)
obj3.cor = 'Branco'; // Ignorado. Não permite a inserção de novas propriedades.
// console.log(obj3)

const pessoa = {
    nome: 'Leonardo',
    idade: 30,
    altura: 1.73,
    cor: 'branca',
};

console.log(pessoa);

Object.defineProperty(pessoa, 'cor', {
    writable: false, // Não permite ser alterado.
    enumerable: true, // Permite ser exibido nas listagens e iterações.
    configurable: false, // Não permite que seja deletado ou reconfiugrado.
});

console.log(pessoa.cor);
pessoa.cor = 'Preta';
console.log(pessoa.cor);
delete pessoa.cor
console.log(pessoa.cor);

Object.defineProperties(pessoa, {
    idade:{value:31, writable:true, enumerable:true, configurable:true},
    altura:{writable:false, enumerable:true},
});

console.log(pessoa);

pessoa.idade = 19

console.log(pessoa.idade)

pessoa.altura = 1.35

console.log(pessoa.altura)

// Esse método .getOwnPropertyDescriptors ou ...Descriptor entrega as propriedades de cada atributo.
console.log(Object.getOwnPropertyDescriptors(pessoa))


