export class Conta{

    constructor(cliente,agencia,saldoInicial){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois esssa é uma Classe Abstrata");
        }
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;

    }

    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
        
    }

    get Cliente(){
        return this._cliente;
    }


    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        throw new Error("O método é abstrato. Deve ser sobrescrito");

    }

    _sacar(taxa,valor){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valor;
        }

        return 0;
    }

    depositar(valor){
        if(valor <= 0) return
        this._saldo += valor;
    }


    transferir(valor,conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}