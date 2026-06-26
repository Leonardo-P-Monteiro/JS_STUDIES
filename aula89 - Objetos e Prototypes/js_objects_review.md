# Revisão Completa: Objetos em JavaScript

> [!NOTE]
> Em JavaScript, quase tudo é um objeto (com exceção dos tipos primitivos como string, number, boolean, null, undefined e symbol). Um objeto é fundamentalmente uma coleção dinâmica de **propriedades**, onde cada propriedade é uma associação entre uma **chave** (nome) e um **valor**. Se o valor for uma função, ele é chamado de **método**.

## 1. Criação de Objetos

Existem várias maneiras de criar um objeto em JavaScript:

### Literals (A forma mais comum e recomendada)
```javascript
const pessoa = {
  nome: "Leonardo",
  idade: 30,
  isDev: true
};
```

### A palavra-chave `new`
```javascript
const carro = new Object();
carro.marca = "Toyota";
carro.modelo = "Corolla";
```

### `Object.create()`
Cria um novo objeto usando um objeto existente como protótipo.
```javascript
const animal = { tipo: "Mamífero" };
const cachorro = Object.create(animal);
cachorro.latir = function() { console.log("Au au!"); };
```

---

## 2. Acessando Propriedades

Você pode acessar, adicionar ou modificar propriedades de duas formas:

### Notação de Ponto (Dot Notation)
A mais comum, usada quando você sabe o nome exato da propriedade.
```javascript
console.log(pessoa.nome); // "Leonardo"
pessoa.idade = 31;        // Modificando um valor
```

### Notação de Colchetes (Bracket Notation)
Útil quando o nome da propriedade tem espaços, caracteres especiais ou está armazenado em uma variável.
```javascript
const propriedadeDesejada = "idade";
console.log(pessoa[propriedadeDesejada]); // 31

pessoa["cor favorita"] = "Azul"; // Chave com espaço
```

---

## 3. Métodos e o uso do `this`

Métodos são funções armazenadas como propriedades de um objeto. O `this` dentro de um método refere-se ao objeto que invocou o método.

> [!WARNING]
> O valor do `this` pode mudar dependendo de como a função é chamada. Tenha cuidado ao passar métodos como callbacks, pois eles podem perder o contexto (o `this` passa a apontar para o objeto global).

```javascript
const usuario = {
  nome: "Ana",
  saudacao() {
    // 'this' refere-se ao objeto 'usuario'
    console.log(`Olá, eu sou a ${this.nome}`);
  }
};

usuario.saudacao(); // "Olá, eu sou a Ana"
```

---

## 4. Iterando sobre Objetos

Diferente de Arrays, Objetos não são iteráveis por padrão com um simples `for...of` (diretamente). Você usa as seguintes abordagens:

### O laço `for...in`
Percorre as **chaves** (nomes das propriedades) enumeráveis de um objeto.
```javascript
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
```

### Métodos estáticos de `Object` (Muito úteis!)

| Método | Retorno | Exemplo prático |
| :--- | :--- | :--- |
| `Object.keys(obj)` | Array com as chaves | `['nome', 'idade', 'isDev']` |
| `Object.values(obj)`| Array com os valores | `['Leonardo', 30, true]` |
| `Object.entries(obj)`| Array de arrays `[chave, valor]` | `[['nome', 'Leonardo'], ['idade', 30]]` |

```javascript
// Usando Object.entries com destructuring é excelente
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`A chave é ${chave} e o valor é ${valor}`);
});
```

---

## 5. Referência vs Valor

> [!CAUTION]
> Objetos são copiados por **Referência**, e não por Valor. Isso significa que se você atribuir um objeto a uma nova variável, ambas apontarão para o mesmo espaço na memória. Alterar uma afetará a outra!

```javascript
const objA = { valor: 10 };
const objB = objA; // objB aponta para a mesma referência que objA

objB.valor = 20;
console.log(objA.valor); // Retorna 20! (objA foi afetado)
```

**Como copiar corretamente um objeto (Cópia Rasa / Shallow Copy):**
```javascript
// Usando o Spread Operator (...)
const copiaVerdadeira = { ...objA }; 
// ou Object.assign()
const copiaAntiga = Object.assign({}, objA);
```

---

## 6. Recursos Modernos (ES6+)

### Desestruturação (Destructuring)
Permite extrair dados de objetos em variáveis distintas de forma elegante.
```javascript
const { nome, idade } = pessoa;
console.log(nome); // "Leonardo"
```

### Propriedades Abreviadas (Shorthand)
Se a chave e a variável que contém o valor tiverem o mesmo nome, você pode omitir o valor.
```javascript
const cidade = "São Paulo";
const estado = "SP";

const local = { cidade, estado }; 
// É o mesmo que { cidade: cidade, estado: estado }
```

### Encadeamento Opcional (Optional Chaining - `?.`)
Evita erros caso você tente acessar propriedades profundamente aninhadas que podem não existir (null ou undefined).
```javascript
const user = { perfil: { bio: "Dev JS" } };

// Se 'endereco' não existir, retorna undefined ao invés de quebrar a aplicação (Type Error)
console.log(user.endereco?.rua); 
```

---

## 7. Apagando propriedades
Use a palavra-chave `delete` para remover uma propriedade de um objeto.

```javascript
const temporario = { a: 1, b: 2 };
delete temporario.a;
console.log(temporario); // { b: 2 }
```
