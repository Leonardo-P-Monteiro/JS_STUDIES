# Aula: O "Superpoder" do JavaScript Funcional (Encadeamento)

> [!NOTE]
> **Qual problema isso resolve?** 
> Quando você tem uma lista bruta de dados e precisa extrair apenas os relevantes, modificá-los de alguma forma e, no fim, gerar um resultado único, fazer tudo isso com múltiplos loops `for` e variáveis soltas deixa o código confuso e propenso a bugs. O encadeamento (*chaining*) cria um pipeline de dados limpo e direto.

## A Linha de Montagem (Analogia Prática)

Imagine uma esteira de produção contínua de suco de laranja:

1. **`filter` (A Peneira):** As laranjas chegam da fazenda. A primeira máquina na esteira tira as laranjas estragadas e deixa passar apenas as boas.
2. **`map` (O Espremedor):** A próxima máquina pega cada laranja boa que passou pela peneira e a transforma em suco.
3. **`reduce` (O Engarrafador):** A última máquina pega todo o suco extraído de cada laranja e junta tudo dentro de uma única garrafa grande de 2 Litros.

A mágica do encadeamento no JavaScript é que **cada máquina passa o resultado imediatamente para a próxima**, sem precisar armazenar as coisas no meio do caminho.

---

## Sintaxe, Argumentos e Anatomia

A anatomia baseia-se no fato de que `filter` e `map` **sempre retornam um novo array**. Como o resultado deles é um array, você pode chamar o próximo método imediatamente usando um ponto `.`. O `reduce` geralmente encerra a corrente, pois ele retorna um valor único.

```javascript
const resultadoFinal = arrayOriginal
  .filter(item => /* retorna true (mantém) ou false (descarta) */)
  .map(item => /* retorna o item transformado */)
  .reduce((acumulador, item) => /* retorna a consolidação final */, valorInicial);
```

> [!IMPORTANT]
> **A Ordem Importa (MUITO):** Em 99% das vezes, você deve usar o `filter` ANTES do `map`. Se você transformar todos os dados primeiro para depois filtrá-los, estará gastando processamento do computador à toa modificando itens que serão descartados logo em seguida.

> [!WARNING]
> **Onde a corrente termina:** Se você colocar o `reduce` no meio da corrente, o próximo método vai quebrar! O `reduce` não devolve um array (na maioria dos casos), devolve um valor consolidado.

> [!TIP]
> **Código Limpo:** Quebre as chamadas em múltiplas linhas (uma embaixo da outra). Isso facilita a leitura como se fosse uma receita de bolo.

---

## Exemplos de Código

### Camada 1: O Exemplo Isolado (A Mecânica)
Temos uma lista de números. Queremos apenas os números pares, vamos multiplicar cada um por 2 e somar todos eles.

```javascript
const numeros = [1, 2, 3, 4, 5, 6];

const somaDosDobrosDosPares = numeros
  .filter(n => n % 2 === 0) // Sobra: [2, 4, 6]
  .map(n => n * 2)          // Transforma em: [4, 8, 12]
  .reduce((acc, n) => acc + n, 0); // Soma: 4 + 8 + 12 = 24

console.log(somaDosDobrosDosPares); // 24
```

### Camada 2: O Exemplo Contextualizado (E-commerce)
Imagine que você precisa calcular o **valor total do carrinho de compras, mas apenas para os produtos da categoria "eletrônicos" que estão com desconto de 10%**.

```javascript
const carrinho = [
  { nome: 'Notebook', categoria: 'eletronicos', preco: 4000 },
  { nome: 'Camiseta', categoria: 'roupas', preco: 80 },
  { nome: 'Smartphone', categoria: 'eletronicos', preco: 2000 },
  { nome: 'Tênis', categoria: 'calcados', preco: 300 }
];

const totalEletronicosComDesconto = carrinho
  // 1. FILTER: Pega apenas os eletrônicos (Descarta roupas e calçados)
  .filter(produto => produto.categoria === 'eletronicos')
  
  // 2. MAP: Pega o preço desses eletrônicos e aplica 10% de desconto
  .map(produto => produto.preco * 0.9)
  
  // 3. REDUCE: Soma todos os preços com desconto
  .reduce((acumulador, precoFinal) => acumulador + precoFinal, 0);

console.log(`Total a pagar (Eletrônicos): R$ ${totalEletronicosComDesconto}`); 
// Resultado: (4000 * 0.9 = 3600) + (2000 * 0.9 = 1800) = 5400
```

---

## Debugging

Quando você tem um "trem" com vários métodos juntos e o resultado dá errado, pode ser difícil saber *qual vagão descarrilou*. A dica de ouro é: se quebrar, **separe temporariamente a corrente em variáveis**:

```javascript
// Em vez de encadear tudo e tentar adivinhar onde está o erro:
const soEletronicos = carrinho.filter(p => p.categoria === 'eletronicos');
console.log('Depois do filtro:', soEletronicos); // Inspecione aqui!

const comDesconto = soEletronicos.map(p => p.preco * 0.9);
console.log('Depois do map:', comDesconto); // Inspecione aqui!
```

---

## 🎯 Desafio Prático

Abra seu workspace em `aula81 - Arrays` (ou crie um novo arquivo) e resolva o problema abaixo usando **filter, map e reduce encadeados**:

**O Problema:**
Você tem uma lista de idades: `const idades = [15, 22, 17, 30, 45, 12, 60]`.

1. Filtre apenas as pessoas que são maiores de idade (`>= 18`).
2. Adicione `5` anos à idade de cada um (uma projeção para o futuro).
3. Some todas essas idades projetadas para descobrir qual seria a soma da idade deles daqui a 5 anos.
