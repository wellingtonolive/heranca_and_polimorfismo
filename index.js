import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const cliente = new Cliente("Lais",123487,2541);
const diretor = new Diretor("Wellington",123456798,10000);
const gerente = new Gerente("Tiago Zolli",12384894,5000);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123");
cliente.cadastrarSenha("456789");
const logado = SistemaAutenticacao.login(cliente,"123");

console.log(logado);
