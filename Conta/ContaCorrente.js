import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta{

    static numeroDeContas = 0;


    constructor(cliente,agencia){
        super(cliente,agencia,0);
        ContaCorrente.numeroDeContas += 1;

    }


    
    sacar(valor){
        let taxa = 1.15;
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }

    }
    
   
    
}