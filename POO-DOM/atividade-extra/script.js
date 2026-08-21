class Produto {

    constructor(nome, preco, categoria, desconto) {

        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;

    }

}


class Estoque {

    constructor() {

        this.produtos = [];

    }


    adicionarProduto(produto) {

        this.produtos.push(produto);

    }


    excluirProduto(indice) {

        this.produtos.splice(indice, 1);

        this.exibirNaTela();

    }


    exibirNaTela() {

        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";


        this.produtos.forEach((produto, indice) => {

            resultado.innerHTML += `

                <div class="produto">

                    <p>Nome: ${produto.nome}</p>

                    <p>Preço: R$ ${produto.preco}</p>

                    <p>Categoria: ${produto.categoria}</p>

                    <p>Desconto: ${produto.desconto}%</p>

                    <button onclick="estoque.excluirProduto(${indice})">
                        Excluir
                    </button>

                </div>

            `;

        });

    }

}


const estoque = new Estoque();


const nome = document.querySelector("#nome");

const preco = document.querySelector("#preco");

const categoria = document.querySelector("#categoria");

const desconto = document.querySelector("#desconto");

const botaoCadastrar = document.querySelector("#botaoCadastrar");


botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(
        nome.value,
        preco.value,
        categoria.value,
        desconto.value
    );


    estoque.adicionarProduto(produto);

    estoque.exibirNaTela();


    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";

});