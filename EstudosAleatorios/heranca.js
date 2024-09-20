function Brick() {
    this.width = 10;
    this.height = 20;
}

function BlueGlassBrick() {
    Brick.call(this);
    
    this.opacity = 0.5;
    this.color = "blue";
}

function Professor(primeiro, segundo, idade, genero, interesses, assunto) {
    Professor.call(this, primeiro, segundo, idade, genero, interesses);
    
    this.assunto = assunto;
}

function Pessoa(primeiro, segundo, idade, genero, interesses) {
    this.nome = {
        primeiro, 
        segundo
    };
    this.idade = idade;
    this.genero = genero;
    this.interesses = interesses;
}
// Pessoa.prototype.comprimento = function () {
//     console.log("Hi! I'm " + this.nome.primeiro + " " + this.nome.segundo + ".");
// }

Object.getOwnPropertyNames(Professor.prototype)
Object.defineProperty(Professor.prototype, "construtor", {
    value: Professor,
    enumerable: false,
    writable: true,
  });
Professor.prototype.comprimento = function () {
    let fixo;

    if (
        this.genero === "male" ||
        this.genero === "Male" ||
        this.genero === "m" ||
        this.genero === "M"
    ) {
        fixo = "Mr.";
    } else if (
        this.genero === "female" ||
        this.genero === "Female" ||
        this.genero === "f" ||
        this.genero === "F" 
    ) {
        fixo = "Mrs.";
    } else {
        fixo = "Mx.";
    }

    console.log(
        "Ola, meu nome é " + fixo + " " + this.nome.segundo + 
        ", e sou Professor" + this.assunto + ".");
    
}
Professor.prototype = Object.create(Pessoa.prototype);
const p1 = new Pessoa('Deyse', 'Chelseana', 26, 'F', 'Comer doce', "Matematica");
console.log(p1)