console.log("Olá, JavaScript!");

let a = 10;
let b = 3;
console.log("operador de soma:", a + b);
console.log("operador de subtração:", a - b);
console.log("operador de multiplicação:", a * b);
console.log("operador de divisão:", a / b);
console.log("operador de resto:", a % b);
console.log("operador de exponenciação:", a ** b);

let contador = 5;
contador++;
console.log(contador);


let d = 10;
let e = 15;
let f = 20;
console.log((d + e + f) / 3);

let g = 7;
let h = 2;
console.log("operador de resto:", g % h);

let x = 18;8
let y = "10";
console.log("comparação de igualdade (==):", x == y);
console.log("comparação de idêntico (===):", x === y);
console.log("comparação de desigualdade (!=):", x != y);
console.log("comparação de desigualdade estrita (!==):", x !== y);

//atividade 3
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

//atividade 4
let n1 = 18;
let n2 = 20;

if (n1 > n2) {
    console.log("Você é maior de idade:", n1);
} else if (n2 > n1) {
    console.log("Você é menor de idade:", n2);
}

//atividade operadores lógicos
let idadeUsuario = 20;
let possuiCarteiraDeMotorista = true;
console.log("&& E");
console.log(idadeUsuario >= 18 && possuiCarteiraDeMotorista);

let chovendo = false;
let guardaChuva = true;
console.log("|| OU");
console.log(chovendo || guardaChuva);

let ligado = false;
console.log(!ligado);

//atividade 5
let nota1 = 8;
let frequencia = 60;
if (nota1 >= 7 && frequencia >= 75) {  
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//atividade 6
let login = false;
let token = true;
if (login || token) {
    console.log("Acesso liberado.");
} else {
    console.log("Acesso negado.");
}