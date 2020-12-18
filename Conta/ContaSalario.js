import { Conta } from "./Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(cliente,10021,0);
    }


    sacar(valor){
        const taxa = 1.01;
        return this._sacar(taxa,valor);
    }

    
}