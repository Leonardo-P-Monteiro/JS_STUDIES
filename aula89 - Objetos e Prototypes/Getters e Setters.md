# Aula: Getters e Setters em JavaScript

## 🎯 Qual Problema Isso Resolve? (Analogia)

Imagine um **condomínio de luxo**. Qualquer pessoa pode entrar e sair? Não! Existem **porteiros**:

- 🚪 **Porteiro da SAÍDA (Getter):** Quando um morador pede para retirar uma encomenda, o porteiro verifica, registra e **entrega de forma organizada**. Ele controla *como* a informação sai.
- 🚪 **Porteiro da ENTRADA (Setter):** Quando alguém tenta entrar, o porteiro **verifica a identidade, valida** e só então permite a entrada. Ele controla *o que* entra.

Do lado de fora, o visitante apenas diz *"quero entrar"* ou *"quero minha encomenda"* — ele nem percebe toda a lógica que roda nos bastidores.

**É exatamente assim que Getters e Setters funcionam:**
- `get` → controla o que é **entregue** quando você lê uma propriedade
- `set` → controla o que é **aceito** quando você escreve em uma propriedade

---

## 🔬 Anatomia do Código

```javascript
const obj = {
    _propriedadeInterna: '',  // ← armazenamento real (convenção: prefixo _)

    get nomeDaPropriedade() {           // ← sem argumentos
        return this._propriedadeInterna; // ← sempre retorna algo
    },

    set nomeDaPropriedade(novoValor) {  // ← exatamente 1 argumento
        // valida / transforma antes de salvar
        this._propriedadeInterna = novoValor;
    }
};

// USO (parece uma propriedade normal!):
obj.nomeDaPropriedade = 'valor';   // ← chama o SET
console.log(obj.nomeDaPropriedade); // ← chama o GET
```

### Detalhamento Crítico

| Elemento | O que faz | Regra |
|:---|:---|:---|
| `get` | Define um **getter** — executa ao **ler** a propriedade | **Não** recebe argumentos. **Deve** retornar algo. |
| `set` | Define um **setter** — executa ao **atribuir** à propriedade | Recebe **exatamente 1** argumento (o valor atribuído). |
| `_prefixo` | Convenção para nomear a propriedade interna de armazenamento | Evita **loop infinito** (getter chamando a si mesmo). |
| `this` | Refere-se ao objeto dono do getter/setter | Funciona igual aos métodos que você já conhece. |

---

### ⚠️ Regras de Ouro e Pitfalls

> [!CAUTION]
> **Loop infinito!** Se o getter/setter tiver o mesmo nome da propriedade que ele lê/escreve, ele chamará a si mesmo infinitamente:
> ```javascript
> // ❌ ERRADO — causa stack overflow
> set nome(v) { this.nome = v; }  // chama o próprio setter!
>
> // ✅ CERTO — usa nome diferente para armazenamento
> set nome(v) { this._nome = v; }
> ```

> [!IMPORTANT]
> **Exclusividade Mútua em `Object.defineProperty`:** Você não pode misturar descritores de dados (`value` e `writable`) com descritores de acesso (`get` e `set`) na mesma propriedade. Veremos um exemplo de código e erro sobre isso no tópico dedicado logo abaixo.

> [!TIP]
> Getters são perfeitos para criar **propriedades computadas** — valores que não existem fisicamente no objeto, mas são calculados sob demanda (ex: `get apresentacao()`).

---

## ⚡ A Regra de Exclusividade Mútua (Data vs. Access Descriptors)

No JavaScript, quando usamos `Object.defineProperty()`, as propriedades podem ser configuradas de duas formas que **nunca** se misturam na mesma chave:

1. **Descritores de Dados (Data Descriptors):** Chaves físicas que guardam valores diretamente. Usam `value` e `writable`.
2. **Descritores de Acesso (Access Descriptors):** Chaves dinâmicas controladas por funções. Usam `get` e `set`.

### O que acontece se tentarmos misturar?

Se você tentar definir um valor padrão (`value`) ou marcar como gravável (`writable`) e ao mesmo tempo definir um `get` ou `set`, o JavaScript lançará um erro imediato em tempo de execução: `TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute`.

#### Exemplo com Erro (O que NÃO fazer) ❌

```javascript
const produto = {};

// Isso vai quebrar o código!
Object.defineProperty(produto, 'preco', {
    value: 10,             // ❌ Descritor de Dado
    writable: true,        // ❌ Descritor de Dado
    get() {                // ❌ Descritor de Acesso
        return this._preco;
    }
});
// 🔴 Resultado: TypeError: Invalid property descriptor...
```

#### Como fazer corretamente ✅

Se quer usar lógica (get/set), retire o `value` e o `writable`. O controle de se ela pode ser escrita ou não fica a cargo da presença ou ausência do `set`:

```javascript
const produto = {
    _preco: 10 // O valor físico é guardado separadamente aqui
};

Object.defineProperty(produto, 'preco', {
    get() {
        return this._preco;
    },
    set(valor) {
        if (valor > 0) this._preco = valor;
    },
    enumerable: true,
    configurable: true
    // Sem 'value' e sem 'writable'!
});
```

---

## 💻 Exemplos de Código

### Camada 1 — Exemplo Isolado (mecânica pura)

```javascript
const produto = {
    _preco: 0,

    get preco() {
        return `R$ ${this._preco.toFixed(2)}`; // formata na saída
    },

    set preco(novoPreco) {
        if (typeof novoPreco !== 'number' || novoPreco < 0) {
            console.log('⚠️ Preço inválido!');
            return;
        }
        this._preco = novoPreco;
    }
};

produto.preco = 49.9;
console.log(produto.preco);  // "R$ 49.90"  ← getter formatou

produto.preco = -10;         // "⚠️ Preço inválido!"  ← setter bloqueou
console.log(produto.preco);  // "R$ 49.90"  ← valor preservado
```

**O que acontece por trás:**
1. `produto.preco = 49.9` → JS vê que existe um `set preco`, então chama a função passando `49.9` como argumento
2. O setter valida e salva em `this._preco`
3. `console.log(produto.preco)` → JS vê que existe um `get preco`, então chama a função e exibe o retorno

---

### Camada 2 — Exemplo Contextualizado (conectado ao seu projeto)

Você já trabalhou com `Object.defineProperty` e proteção de propriedades (`writable`, `enumerable`, `configurable`) no arquivo [niveis_protecao_propriedades.js](file:///c:/Users/Leonardo%20P%20Monteiro/Documents/JS_STUDIES/aula89%20-%20Objetos%20e%20Prototypes/niveis_protecao_propriedades.js). Getters/Setters são a **evolução natural**: em vez de apenas travar a escrita com `writable: false`, você ganha **lógica personalizada** de validação.

```javascript
const pessoa = {
    _nome: '',
    _idade: 0,

    get nome() {
        if (!this._nome) return '(sem nome)';
        return this._nome.charAt(0).toUpperCase() + this._nome.slice(1);
    },

    set nome(valor) {
        if (typeof valor !== 'string' || valor.trim().length < 2) {
            console.log('⚠️ Nome inválido!');
            return;
        }
        this._nome = valor.trim().toLowerCase();
    },

    get idade() {
        return this._idade;
    },

    set idade(valor) {
        if (typeof valor !== 'number' || valor < 0 || valor > 130) {
            console.log('⚠️ Idade inválida!');
            return;
        }
        this._idade = Math.floor(valor);
    },

    // Propriedade COMPUTADA — não existe fisicamente, é calculada
    get apresentacao() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    },
};

pessoa.nome = 'leonardo';
console.log(pessoa.nome);         // "Leonardo" ← capitalizado
console.log(pessoa.apresentacao); // "Olá, meu nome é Leonardo e tenho 30 anos."
```

---

### Com `Object.defineProperty` (a ponte com o que você já aprendeu)

```javascript
const carro = { _marca: '' };

Object.defineProperty(carro, 'marca', {
    get() { return this._marca.toUpperCase(); },
    set(valor) {
        if (typeof valor !== 'string') return;
        this._marca = valor;
    },
    enumerable: true,
    configurable: false,
});

carro.marca = 'toyota';
console.log(carro.marca); // "TOYOTA"
```

---

### Em Classes (ES6+) — com campo privado `#`

```javascript
class ContaBancaria {
    #saldo = 0;  // campo verdadeiramente privado

    get saldo() {
        return `R$ ${this.#saldo.toFixed(2)}`;
    }

    set saldo(valor) {
        console.log('⚠️ Use depositar() ou sacar().');
    }

    depositar(quantia) {
        if (quantia > 0) this.#saldo += quantia;
    }

    sacar(quantia) {
        if (quantia > 0 && quantia <= this.#saldo) this.#saldo -= quantia;
    }
}

const conta = new ContaBancaria();
conta.depositar(1000);
console.log(conta.saldo);   // "R$ 1000.00"
conta.saldo = 999999;       // "⚠️ Use depositar() ou sacar()."
console.log(conta.saldo);   // "R$ 1000.00" ← inalterado!
```

---

## 📌 Resumo Executivo

- **`get`** transforma/formata a **saída**. **`set`** valida/filtra a **entrada**.
- São acessados como **propriedades normais** (sem parênteses) — essa é a mágica.
- Use `_` (convenção) ou `#` (campo privado real) para a propriedade interna de armazenamento.

## 🔍 Visão de Debug

Para verificar se seus getters/setters estão funcionando, use:

```javascript
// Ver os descritores da propriedade (mostra get/set em vez de value)
console.log(Object.getOwnPropertyDescriptor(produto, 'preco'));
// { get: [Function: get preco], set: [Function: set preco], enumerable: true, configurable: true }
```

> [!TIP]
> Se aparecer `get` e `set` no descritor em vez de `value` e `writable`, significa que o getter/setter está ativo. Você já usou `Object.getOwnPropertyDescriptors()` no seu arquivo de proteção de propriedades — é o mesmo princípio!

---

## 🏋️ Desafio Prático

Crie um objeto chamado `aluno` no arquivo [getters e setters.js](file:///c:/Users/Leonardo%20P%20Monteiro/Documents/JS_STUDIES/aula89%20-%20Objetos%20e%20Prototypes/getters%20e%20setters.js) com:

1. **`nota`** → O `set` só aceita números entre 0 e 10. O `get` retorna a nota com uma casa decimal (ex: `"7.0"`).
2. **`situacao`** → Apenas um `get` (propriedade computada, sem setter). Retorna `"Aprovado"` se nota >= 7, senão `"Reprovado"`.

Teste atribuindo notas válidas e inválidas e veja o resultado! Quando terminar, me chame para corrigir e discutir sua solução. 🚀
