class Produto {
    constructor(nome, preco, categoria, desconto, id) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
        this.id = id || Date.now() + Math.random();
    }

    aplicarDesconto() {
        this.preco = this.preco - (this.preco * this.desconto / 100);
    }

    exibir() {
        return `
            <div class="produto" data-id="${this.id}">
                <p>Nome: ${this.nome}</p>
                <p>Preço com desconto: R$ ${this.preco.toFixed(2)}</p>
                <p>Categoria: ${this.categoria}</p>
                <p>Desconto: ${this.desconto}%</p>
                <button class="botaoExcluir" data-id="${this.id}">Excluir</button>
                <hr>
            </div>
        `;
    }
}

const CHAVE_STORAGE = "produtos";

let produtos = [];

const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");
const resultado = document.querySelector("#resultado");

function salvarNoStorage() {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(produtos));
}


function carregarDoStorage() {
    const dados = localStorage.getItem(CHAVE_STORAGE);
    if (dados) {
        const produtosSalvos = JSON.parse(dados);

        produtos = produtosSalvos.map(function (p) {
            return new Produto(p.nome, p.preco, p.categoria, p.desconto, p.id);
        });
    }
}

function renderizarProdutos() {
    resultado.innerHTML = "";
    produtos.forEach(function (produto) {
        resultado.innerHTML += produto.exibir();
    });
}

function excluirProduto(id) {
    produtos = produtos.filter(function (produto) {
        return produto.id != id;
    });
    salvarNoStorage();
    renderizarProdutos();
}

botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(
        nome.value,
        Number(preco.value),
        categoria.value,
        Number(desconto.value)
    );

    produto.aplicarDesconto();

    produtos.push(produto);

    salvarNoStorage();

    renderizarProdutos();

    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";
});

resultado.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("botaoExcluir")) {
        const id = evento.target.getAttribute("data-id");
        excluirProduto(id);
    }
});

carregarDoStorage();
renderizarProdutos();