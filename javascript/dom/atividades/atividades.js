// atividade 1
let botao = document.getElementById("botao");
let botao2 = document.getElementById("botao2");
let texto = document.getElementById("texto");
botao.addEventListener("click", function() {
    texto.style.color = "blue";
});

botao2.addEventListener("click", function() {
    texto.style.color = "red";
});

// atividade 2
let botao3 = document.getElementById("botao3");
let texto2 = document.getElementById("texto2"); 
botao3.addEventListener("click", function() {
    if (texto2.style.display === "none") {
        texto2.style.display = "block";   
    } else {
        texto2.style.display = "none";
    }
});

// atividade 3
let inputTexto = document.querySelector("#inputTexto");
let contarCaracter = document.querySelector("#contarCaracter");

inputTexto.addEventListener("keyup", function() {
    let contagem = inputTexto.value.length;
    contarCaracter.textContent = "Número de caracteres: " + contagem;
});

// atividade 4
let click = document.querySelector("#click");
let contarCliques = document.querySelector("#contarCliques");
let contador = 0;

click.addEventListener("click", function() {
    contador++;
    contarCliques.textContent = "Cliques: " + contador;
});

// atividade 5 e 6

botao4.addEventListener("click", function() {
    if (inputDinamico.value.trim() === "") {
        alert("O campo está vazio. Por favor, insira um valor.");
        return;
    }
    let item = document.createElement("li");
    item.textContent = inputDinamico.value;
    listaDinamica.appendChild(item);
    inputDinamico.value = "";
    item.addEventListener("click", function() {
        let confirmacao = confirm("Deseja remover este item?");
        if (confirmacao) {
            listaDinamica.removeChild(item);
        }
    });
});

// Atividade HARD
let inputNome = document.querySelector("#inputNome");
let botaoEnviar = document.querySelector("#botaoEnviar");
let mensagem = document.querySelector("#mensagem");
botaoEnviar.addEventListener("click", function() {
    if (inputNome.value.trim() === "") {
        mensagem.textContent = "O campo nome é obrigatório";    
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "Nome enviado com sucesso!";
        mensagem.style.color = "green";
    }
});
