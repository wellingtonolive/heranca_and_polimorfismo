export class Funcionario {

    constructor(nome, cpf, salario) {
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._bonificacao = 1;
        this.senha;
    }


    autenticar(senha) {
        return senha == this.senha;

    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }

    get senha() {
        return this._senha;
    }



}