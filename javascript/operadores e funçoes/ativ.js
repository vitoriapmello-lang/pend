console.log("ativ 1")
function mostrarhoraAtual() {
    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();
    console.log("Hora atual:", hora + ":" + minutos + ":" + segundos);
}
mostrarhoraAtual();

console.log("ativ 2");
function SomaeMedia(a, b) {
    let soma = a + b;
    let media = soma / 2;
    console.log("soma:", soma);
    console.log("media:", media);
}
SomaeMedia(10, 20);

console.log("ativ 3");
function analisaNome(nome) {
    console.log("nome:", nome);
    console.log("quantidade de letras:", nome.length);
    console.log("nome em maiúsculas:", nome.toUpperCase());
}
analisaNome("Vitoria");

console.log("ativ 4");
function verificaFrase(frase) {
    console.log("frase:", frase);
    console.log("contém a palavra 'html'?", frase.includes("html"));
}
verificaFrase("Eu estudo html e css!");
