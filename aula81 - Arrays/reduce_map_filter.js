const carrinho = [
  { nome: 'Notebook', categoria: 'eletronicos', preco: 4000 },
  { nome: 'Camiseta', categoria: 'roupas', preco: 80 },
  { nome: 'Smartphone', categoria: 'eletronicos', preco: 2000 },
  { nome: 'Tênis', categoria: 'calcados', preco: 300 }
];

const totalEletronicosComDesconto = carrinho
// 1. Filter: Pega apenas os eletrônicos.
.filter(produto => produto.categoria === 'eletronicos')
// 2. Map: Pega o preço desses itens, aplica o desconto e retornar um array
//         contendo apenas os valores de preço processados.
// Se quisesse manter o objeto com chave-valor, teria que retornar um objeto novo:
// .map(produto => ({ nome: produto.nome, preco: produto.preco * 0.9 }))
.map(produto => produto.preco * 0.9)
// 3. Reduce: Soma todos os preços com desconto.
.reduce((acc, precoFinal) => acc + precoFinal, 0);


console.log(totalEletronicosComDesconto)

// Desafio Prático da IA

const idades = [15, 22, 17, 30, 45, 12, 60];

const resultIdade = idades
.filter(idade => idade >= 18)
.map(idade => idade + 5)
.reduce((acc, i) => acc + i, 0)

console.log(resultIdade)
// Conferi o resultado e deu certo. 