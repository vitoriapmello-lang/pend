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

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = `
            <div>
                <p>Nome: ${this.nome}</p>
                <p>Preço com desconto: R$ ${this.preco.toFixed(2)}</p>
                <p>Categoria: ${this.categoria}</p>
                <p>Desconto: ${this.desconto}%</p>
            </div>
        `;
    }
}


const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botaoCadastrar = document.querySelector("#botaoCadastrar");


botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(
        nome.value,
        Number(preco.value),
        categoria.value,
        Number(desconto.value)
    );

    produto.aplicarDesconto();
    localStorage.setItem("produto", JSON.stringify(produto));
    produto.exibir();
});

const dados = localStorage.getItem("produto");

if (dados) {

    const produtoRecuperado = JSON.parse(dados);

    const produto = new Produto(
        produtoRecuperado.nome,
        produtoRecuperado.preco,
        produtoRecuperado.categoria,
        produtoRecuperado.desconto
    );

    produto.exibir();

}  