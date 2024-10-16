import Pessoa, { nome, sobrenome, idade, soma, veses} from './modulo1' 
console.log(veses(20, 40));
console.log(new Pessoa(nome, sobrenome));
console.log(soma(idade, 10));


// import { nome, sobrenome, idade, soma, Pessoa } from './modulo1';

// const p1 = new Pessoa(nome, sobrenome);
// console.log(p1)

// import { nome as nome2, sobrenome, idade, soma as gordaoXT } from './modulo1';

// console.log(nome2, sobrenome, idade);
// console.log(gordaoXT(20, 30));