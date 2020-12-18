import {Conta} from "./Conta.js"

export class ContaPoupanca extends Conta{

    constructor(cliente,agencia,saldoInicial){
        super(cliente,agencia,saldoInicial)
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(taxa, valor);
    }

   

}