//atividade 9
let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log
}

function mostrarDataHora() {
    let data = new Date();

console.log("Data:", data.getDate());
console.log("Mês:", data.getMonth() + 1);
console.log("Ano:", data.getFullYear());
console.log("Hora:", data.getHours());
console.log("Minutos:", data.getMinutes());
console.log("Segundos:", data.getSeconds());
}
mostrarDataHora();

console.log("Desafio 1:");
function dataConcatenada() {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    return hora + ":" + minutos + ":" + segundos + " " + dia + "/" + mes + "/" + ano;
}
console.log(dataConcatenada());

console.log("funçoes nativas:");
let pi = (Math.PI);
console.log(pi.toFixed(2));

function calcularoperacao(numero) {
    console.log("Número:", numero);
    console.log("Raiz quadrada:", Math.sqrt(numero));
    console.log("arredondado:", Math.round(numero));
    console.log("para cima:", Math.ceil(numero));
    console.log("para baixo:", Math.floor(numero));
}   
calcularoperacao(7.8);

console.log("desafio 2:");
function calcularOperacoesDesafios(numero) {
console.log("numero:", numero);
console.log("elevado ao quadrado:", Math.pow(numero, 2));
console.log("elevado ao cubo:", Math.pow(numero, 3));
console.log("valor absoluto:", Math.abs(numero));
}
calcularOperacoesDesafios(-5);
calcularOperacoesDesafios(3);

console.log("funçoes de texto:");

function analisaTexto(texto) {
    console.log("Texto:", texto);
    console.log("Número de caracteres:", texto.length);
    console.log("Texto em maiúsculas:", texto.toUpperCase());
    console.log("Texto em minúsculas:", texto.toLowerCase());
}
analisaTexto("Olá, Mundo!");

function oqueFazEssaFuncoes(frase) {
    console.log(frase.includes("JavaScript"))
    }
oqueFazEssaFuncoes("Eu estudo JavaScript!");

function concatenaTexto(nome, curso) {
    return "Aluno " + nome + " | Curso: " + curso;
}
console.log(concatenaTexto("Vitoria", "Front-end"));



