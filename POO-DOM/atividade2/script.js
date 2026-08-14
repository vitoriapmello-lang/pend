class Produto {

    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        this.preco = this.preco - (this.preco * this.desconto / 100);
    }

    exibir() {
        return `
            <div>
                <p>Nome: ${this.nome}</p>
                <p>Preço com desconto: R$ ${this.preco.toFixed(2)}</p>
                <p>Categoria: ${this.categoria}</p>
                <p>Desconto: ${this.desconto}%</p>
                <hr>
            </div>
        `;
    }
}


// Array que vai armazenar vários produtos
const produtos = [];


const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");
const resultado = document.querySelector("#resultado");


botaoCadastrar.addEventListener("click", function () {

    // Cria um novo produto
    const produto = new Produto(
        nome.value,
        Number(preco.value),
        categoria.value,
        Number(desconto.value)
    );

    // Aplica o desconto
    produto.aplicarDesconto();

    // Adiciona o produto ao array
    produtos.push(produto);

    // Limpa o resultado
    resultado.innerHTML = "";

    // Exibe todos os produtos cadastrados
    produtos.forEach(function(produto) {
        resultado.innerHTML += produto.exibir();
    });

    // Limpa os campos
    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";
});