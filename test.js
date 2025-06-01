function processar(dados) {
    if (typeof dados === "object" && dados !== null) { // Verifica se é objeto e não é null
      console.log("Processando dados do objeto...");
      // ... faz algo com o objeto ...
    } else if (typeof dados === "string") {
      console.log("Processando uma string:", dados);
    } else {
      console.log("Tipo de dado não suportado:", typeof dados);
    }
  }
  
  processar({ id: 1, status: "ok" });
  processar("Informação textual");
  processar(null); // Vai cair no 'else' por causa da verificação 'dados !== null'
  processar(55);