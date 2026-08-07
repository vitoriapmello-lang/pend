// Classe-modelo que criamos para criar objetos do tipo Aluno
class Aluno {

    // Atributos
    nome;
    idade;
    curso;
    matricula;

    // Método construtor
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }

    // Métodos
    aprender() {
        console.log(`${this.nome} está aprendendo.`);
    }

    estudar() {
        console.log(`${this.nome} está estudando.`);
    }

    apresentar() {
        console.log(`Olá! Meu nome é ${this.nome}, tenho ${this.idade} anos e faço o curso de ${this.curso}.`);
    }
}

// Objeto 1
const aluno1 = new Aluno("Vitória", 17, "Técnico em Informática", "2026001");
console.log("Aluno 1:", aluno1);

// Objeto 2
const aluno2 = new Aluno("Rafel leme mega", 17, "Engenharia de software", "2026002");
console.log("Aluno 2:", aluno2);

// Objeto 3
const aluno3 = new Aluno("Theodoro", 16, "Medicina", "2026003");
console.log("Aluno 3:", aluno3);

console.log("--------------------------------------------------");
console.log("Atributos do aluno 1:");
console.log("Nome:", aluno1.nome);
console.log("Idade:", aluno1.idade);
console.log("Curso:", aluno1.curso);
console.log("Matrícula:", aluno1.matricula);

console.log("--------------------------------------------------");
console.log("Atributos do aluno 2:");
console.log("Nome:", aluno2.nome);
console.log("Idade:", aluno2.idade);
console.log("Curso:", aluno2.curso);
console.log("Matrícula:", aluno2.matricula);

console.log("--------------------------------------------------");
console.log("Atributos do aluno 3:");
console.log("Nome:", aluno3.nome);
console.log("Idade:", aluno3.idade);
console.log("Curso:", aluno3.curso);
console.log("Matrícula:", aluno3.matricula);

console.log("--------------------------------------------------");

// Chamando os métodos do aluno1
aluno1.aprender();
aluno1.estudar();
aluno1.apresentar();

console.log("--------------------------------------------------");

// Chamando os métodos do aluno2
aluno2.aprender();
aluno2.estudar();
aluno2.apresentar();

console.log("--------------------------------------------------");

// Chamando os métodos do aluno3
aluno3.aprender();
aluno3.estudar();
aluno3.apresentar();