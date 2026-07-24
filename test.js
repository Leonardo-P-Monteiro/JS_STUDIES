function Camiseta (nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
};