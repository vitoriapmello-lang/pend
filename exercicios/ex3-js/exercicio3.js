// Classe-modelo que criamos para criar objetos do tipo Produto
class Produto {

    // Atributos
    nome;
    preco;
    estoque;

    // Método construtor
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }

    // Métodos
    vender(quantidade) {
        if (quantidade <= this.estoque) {
            this.estoque -= quantidade;
            console.log(`${quantidade} unidade(s) de ${this.nome} vendida(s).`);
        } else {
            console.log("Estoque insuficiente.");
        }
    }

    repor(quantidade) {
        this.estoque += quantidade;
        console.log(`${quantidade} unidade(s) adicionada(s) ao estoque.`);
    }

    alterarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`O preço do produto foi alterado para R$${this.preco}.`);
    }
}

// Objeto 1
const produto1 = new Produto("Notebook", 3500, 10);
console.log("Produto 1:", produto1);

// Objeto 2
const produto2 = new Produto("Mouse", 120, 30);
console.log("Produto 2:", produto2);

// Objeto 3
const produto3 = new Produto("Teclado", 250, 20);
console.log("Produto 3:", produto3);

console.log("--------------------------------------------------");
console.log("Atributos do produto 1:");
console.log("Nome:", produto1.nome);
console.log("Preço:", produto1.preco);
console.log("Estoque:", produto1.estoque);

console.log("--------------------------------------------------");
console.log("Atributos do produto 2:");
console.log("Nome:", produto2.nome);
console.log("Preço:", produto2.preco);
console.log("Estoque:", produto2.estoque);

console.log("--------------------------------------------------");
console.log("Atributos do produto 3:");
console.log("Nome:", produto3.nome);
console.log("Preço:", produto3.preco);
console.log("Estoque:", produto3.estoque);

console.log("--------------------------------------------------");

// Chamando os métodos do produto1
produto1.vender(2);
produto1.repor(5);
produto1.alterarPreco(3300);

console.log("--------------------------------------------------");

// Chamando os métodos do produto2
produto2.vender(5);
produto2.repor(10);
produto2.alterarPreco(100);

console.log("--------------------------------------------------");

// Chamando os métodos do produto3
produto3.vender(3);
produto3.repor(8);
produto3.alterarPreco(230);