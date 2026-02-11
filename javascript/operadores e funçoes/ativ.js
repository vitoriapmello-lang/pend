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
// Uma função que receba dois números e mostre: soma e média e que peça os dados para o usuário.
function calcularSomaEMedia() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let soma = numero1 + numero2;
    let media = soma / 2;
    console.log("soma:", soma);
    console.log("media:", media);
}
calcularSomaEMedia();

console.log("ativ 3");
// Uma função que receba um nome e mostre: quantidade de letras e nome em maiúsculo e que peça o nome para o usuário.
function analisarNome() {
    let nome = prompt("Digite seu nome:");
    console.log("Nome:", nome);
    console.log("Quantidade de letras:", nome.length);
    console.log("Nome em maiúsculo:", nome.toUpperCase());
}
analisarNome();

console.log("ativ 4");
// Uma função que receba uma frase e verifica se contém a palavra "HTML" e que peça a frase para o usuário.
function verificarHTML() {
    let frase = prompt("Digite uma frase:");
    console.log("Frase:", frase);
    console.log("Contém 'HTML'?", frase.includes("HTML"));
}   
verificarHTML();
