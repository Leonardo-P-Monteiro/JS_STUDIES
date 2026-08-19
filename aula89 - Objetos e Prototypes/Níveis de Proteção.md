# Aula: Controle Total com Object.defineProperty() e Object.defineProperties()

> [!NOTE]
> Existem métodos no JavaScript, como o `Object.freeze()`, `seal()` e `preventExtensions()`, que protegem um objeto inteiro (são os 3 níveis de proteção globais). Mas e se você quiser proteger apenas **uma única propriedade**? Ou esconder uma propriedade específica de um loop? É aqui que entra o poderoso `defineProperty`.

### Introdução: Os 3 Níveis de Proteção Global

Antes de aprofundarmos nas propriedades individuais, vamos conhecer como podemos travar um objeto inteiro:

*   **`Object.preventExtensions(obj)` (O mais fraco):**
    Impede que **novas** propriedades sejam adicionadas ao objeto.
    ```javascript
    const obj1 = { a: 1 };
    Object.preventExtensions(obj1);
    
    obj1.b = 2;    // Ignorado (não adiciona)
    obj1.a = 99;   // Sucesso (altera a existente)
    delete obj1.a; // Sucesso (remove a existente)
    ```

*   **`Object.seal(obj)` (Nível médio - "Selar"):**
    Impede adicionar e deletar. Você só pode **alterar** os valores que já existem.
    ```javascript
    const obj2 = { a: 1 };
    Object.seal(obj2);
    
    obj2.b = 2;    // Ignorado (não adiciona)
    delete obj2.a; // Ignorado (não deleta)
    obj2.a = 99;   // Sucesso (alteração permitida!)
    ```

*   **`Object.freeze(obj)` (O mais forte - "Congelar"):**
    Impede **tudo**. Não adiciona, não deleta e **não altera** valores. O objeto fica 100% trancado (no primeiro nível).
    ```javascript
    const obj3 = { a: 1 };
    Object.freeze(obj3);
    
    obj3.b = 2;    // Ignorado
    delete obj3.a; // Ignorado
    obj3.a = 99;   // Ignorado
    ```

## 1. O Problema que isso resolve (Analogia)

Imagine que você está construindo o sistema de um Banco. Você tem um objeto `ContaBancaria`. 
Se você simplesmente criar a propriedade da forma padrão (`conta.saldo = 1000`), qualquer outro programador na equipe pode acidentalmente sobrescrever esse valor em outra parte do código fazendo `conta.saldo = 0`. 

Você não quer usar o `Object.freeze()` na conta inteira, porque outras propriedades do objeto (como `historicoDeTransacoes` ou `statusDaConta`) ainda precisam mudar ativamente. 

O `Object.defineProperty` funciona como um **Cofre Inteligente** e super customizável para uma propriedade específica. Ele permite que você defina regras granulares e cirúrgicas: "Essa propriedade não pode ser alterada", "Essa propriedade não deve aparecer em listas (invisível)", ou "Essa propriedade nem sequer pode ser deletada".

## 2. Anatomia e Sintaxe

### `Object.defineProperty(objeto, 'nomeDaPropriedade', descritor)`

A mágica toda acontece no terceiro argumento: o **descritor** (um objeto literal de configuração). Ele pode receber as seguintes "chaves de permissão":

*   **`value`**: O valor real da propriedade (qualquer tipo de dado, até mesmo uma função).
*   **`writable`** (Booleano): Se `true`, o valor pode ser alterado (como uma variável normal usando o `=`). Se `false`, o valor é "somente leitura" (read-only).
*   **`enumerable`** (Booleano): Se `true`, a propriedade vai aparecer em iterações como `for...in` e quando chamamos `Object.keys()`. Se `false`, ela fica "invisível" nas listagens (ótimo para IDs internos, senhas e configurações privadas).
*   **`configurable`** (Booleano): Se `true`, você tem permissão para deletar a propriedade (usando `delete obj.prop`) e também para alterar essas próprias regras no futuro. Se `false`, as regras são travadas para sempre e a propriedade não pode ser apagada.

> [!WARNING]
> **A Armadilha de Ouro (Pitfall):** Quando você cria uma propriedade da maneira comum (ex: `obj.nome = 'Leo'`), as chaves `writable`, `enumerable` e `configurable` são ativadas como `true` por padrão. **MAS**, quando você usa `Object.defineProperty()`, se você omitir essas chaves de configuração, elas nascem como **`false`** por padrão! Muito cuidado com isso.

## 3. Exemplos na Prática

### Camada 1: O Exemplo Isolado e Mecânico

```javascript
const produto = {};

Object.defineProperty(produto, 'id', {
  value: 12345,
  writable: false,     // Não pode ser alterado
  enumerable: true,    // Vai aparecer no Object.keys
  configurable: false  // Não pode ser deletado nem ter as regras modificadas
});

produto.id = 999; // Se você estiver usando "use strict", isso gera um Erro fatal! Sem strict mode, falha silenciosamente.
delete produto.id; // Falha! Não será deletado.
console.log(produto.id); // Continua 12345, intacto e protegido.
```

### Camada 2: Contextualizado (Conectando com Constructor Functions!)

Já que estudamos sobre *Constructor Functions* recentemente, veja como o `defineProperty` é a ferramenta perfeita para garantir segurança (encapsulamento) logo no momento do "nascimento" de um objeto:

```javascript
function ContaBancaria(titular, saldoInicial) {
  this.titular = titular;
  
  // Vamos proteger o saldo para que ninguém mexa diretamente nele por fora
  Object.defineProperty(this, 'saldo', {
    value: saldoInicial,
    writable: false,      // Ninguém pode fazer: conta.saldo = 999999
    enumerable: false,    // Se alguém rodar um 'for...in' na conta, o saldo não aparece bisbilhotando
    configurable: false   // Ninguém pode deletar a propriedade 'saldo'
  });
}

const contaLeonardo = new ContaBancaria("Leonardo", 5000);

contaLeonardo.saldo = 1000000; // Tentativa de hacker falha miseravelmente.

// Retorna apenas ['titular']. A chave 'saldo' está ocultada das listagens!
console.log(Object.keys(contaLeonardo)); 
```

> **E o que é o `Object.defineProperties()`?** 
> É exatamente a mesma ferramenta, mas usada no plural! Ele permite configurar várias propriedades complexas simultaneamente de forma mais limpa:
> ```javascript
> Object.defineProperties(objeto, {
>   id: { value: 1, writable: false, enumerable: true },
>   senhaSecreta: { value: "123", enumerable: false }
> });
> ```

## 4. Resumo Executivo

*   **Macro vs Micro:** Use `preventExtensions` / `seal` / `freeze` para proteger a estrutura do objeto inteiro. Use `defineProperty` para ditar regras cirúrgicas para uma única chave.
*   **Os 3 Pilares do Descritor:** Memorize os booleanos: `writable` (pode sobrescrever?), `enumerable` (aparece nos loops?), `configurable` (pode apagar ou alterar configurações?).

## 5. Como Debugar (O Raio-X)

Para ter certeza absoluta de quais são as regras secretas de uma propriedade por "debaixo dos panos", o JavaScript te dá um óculos de Raio-X. Use o método `getOwnPropertyDescriptor`:

```javascript
console.log(Object.getOwnPropertyDescriptor(contaLeonardo, 'saldo'));
// Retorna o DNA da propriedade:
// { value: 5000, writable: false, enumerable: false, configurable: false }
```

## 6. O Seu Desafio Prático 🚀

Agora é a sua vez de colocar a mão na massa, usando o seu arquivo `objetos_js.js`.

**A Missão:**
1. Crie uma *Constructor Function* chamada `ProdutoDeLoja` que recebe `nome` e `precoCusto` como parâmetros.
2. A propriedade `nome` deve ser criada normalmente (`this.nome = nome`).
3. A propriedade `precoCusto` deve ser acoplada ao objeto utilizando `Object.defineProperty()`.
4. As regras do `precoCusto` devem ser estritas:
   - Ele **NÃO pode ser alterado** no futuro (`writable: false`).
   - Ele **NÃO deve aparecer** quando tentarmos listar as chaves (`enumerable: false`).

*Teste a sua função criando uma instância com o `new` e tente imprimir o `Object.keys()` do novo objeto para comprovar que o custo está invisível na listagem.*

Codifique, faça o teste no terminal (seja com Node.js ou navegador) e cole aqui sua solução para que a gente possa debater!
