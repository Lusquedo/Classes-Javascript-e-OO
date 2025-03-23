class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        return `${this.nome}, ${this.idade} anos`;
    }
}


class Aluno extends Pessoa {
    constructor(nome, idade, turma) {
        super(nome, idade);
        this.turma = turma;
    }

    descrever() {
        return `${super.descrever()}, estuda ADS e é da turma do ${this.turma}`;
    }
}


class Professor extends Pessoa {
    constructor(nome, idade, materia) {
        super(nome, idade);
        this.materia = materia;
    }

    descrever() {
        return `${super.descrever()}, é professor de ${this.materia}`;
    }
}


class Funcionario extends Pessoa {
    constructor(nome, idade, setor) {
        super(nome, idade);
        this.setor = setor;
    }

    descrever() {
        return `${super.descrever()}, trabalha na ${this.setor}`;
    }
}


const aluno = new Aluno("Lucas", 20, "2º Bimestre.");
const professor = new Professor("João", 35, "Banco de Dados.");
const funcionario = new Funcionario("Maria", 40, "Secretaria.");

console.log(aluno.descrever());
console.log(professor.descrever());
console.log(funcionario.descrever());