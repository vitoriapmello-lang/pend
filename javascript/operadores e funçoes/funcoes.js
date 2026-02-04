function saudacao() {
    console.log("Olá! Javascript!");
}
saudacao();

function saudacao1(nome) {
    console.log("Olá, " + nome);
}
saudacao1("Maria");
//função sem retorno (exibir/interagir, ideal para interface/comunicação)

function somar(a, b) {  
    return a + b; //função com retorno (reutilizada em cálculos, ideal para lógica)
}
console.log(somar(5, 3)); 

//atividade 7
function imc(peso,altura) {
    return peso / (altura * altura);
}
let peso = 42; // em kg
let altura = 1.64; // em metros
console.log("Seu IMC é:", imc(peso, altura));

//atividade 8
function imparOuPar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }   
}
let numero = 13;
console.log("O número é", imparOuPar(numero));

