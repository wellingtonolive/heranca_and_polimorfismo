import { Funcionario } from "./Funcionarios/Funcionario.js";

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.realizaAutenticacao(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        
        return false
    }


    static realizaAutenticacao(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
} 

