// Função construtora -> objetos
// Função factory -> objetos
// Construtora - > Pessoa (new)

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {
        console.log('Olá mundo');
    };


    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa('Chelsea', 'Nanon');
const p2 = new Pessoa('Valdemar', 'Nanon');
p1.metodo();


// construtora sempre começa com MAIUSCULO
// Pessoa.nome = nome
// Pessoa.sobrenome = sobrenome