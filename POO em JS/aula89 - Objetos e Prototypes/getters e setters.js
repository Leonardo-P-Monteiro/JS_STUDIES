// Exemplo normal
const alunoNomral = {
    _nome: '',
    _nota: 0,

    get nome() {
        if (!this._nome) {
            return "sem nome";
        };
        return this._nome;
    },

    set nome(valor) {
        if (typeof valor !== "string") {
            throw new TypeError(">>>>> Erro de tipo. Forneça uma string.");
        };
        this._nome = valor.trim().toUpperCase();
    },

    set nota(valor) {
        if (typeof valor !== "number") {
            throw new TypeError('>>> Tipo inválido. Forneça um número.')
        };
        this._nota = valor
    },

    get status () {
        if (this._nota > 7) {
            return "Aprovado 🥳"
        } else {
            return "Reprovado. 😢"
        }
    },
};

alunoNomral.nome = 'Leonardo';
alunoNomral.nota = 10;

console.log(alunoNomral.nome);
console.log(alunoNomral.status);

// Exemplo usando Object.defineProperty

const carro = {
    _nome: '',
};

Object.defineProperty(
    carro, 'nome', {
        enumerable: true,
        configurable: true,
        get() {return this._nome.toUpperCase()},
        set(valor) {this._nome = valor}
    }
)

carro.nome = 'Fusca'

console.log(carro.nome)