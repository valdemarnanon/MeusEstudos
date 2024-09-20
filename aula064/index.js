/* pqp escrevr coisapakrl
Javascrip é baseado em protótipos para passar propriedades e métodos
de um objeto para outro.

Definição de prototipo
Protótipo é o termo usado para se refiri ao que foi criado pela
primeira vez, servindo de modelo, ou molde para futuras produçõess. 
(OBS: COMPRAR TECLADO NOVO PQP)

Todos os objetos tem uma referencia interna para um prototio (__proto__)
quem vem da propriedade prototype de função construtora que foi usada para
cria-lo. Quandotentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar encontrar este membro no p'roprio ibheti e deopius a cadeia
de protótipos é usada até o topo (null) até encontrrar *(ou não) tal membro. (q membrao em)
*/

// pessoa1 --> Pessoa.prototype --> Object.prototype

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL: '+ this.nome + ' ' + this.sobrenome; // metodo
}

// Pessoa.prototype === pessoa1.__proto__

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome; // __proto__

// instância
const pessoa1 = new Pessoa('Chelsea', 'Africano'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Mallboro', 'Vermelho'); // <- Pessoa = Função construtora
const data = new Date(); // <-- Date = Função construtora

console.dir(pessoa1);
console.dir(data);