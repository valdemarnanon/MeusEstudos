function inicio() {
    const nome = 'Mozilla';  // nome é uma variavel local criada  pelo ( inicio )
    function displayNome(){
        // displayNome() é a função interna, uma closure
        console.log(nome); // usa a variável decalarada na função pai       
    }
    displayNome();
}
inicio();

// ==============================================

function criaFuncao() {
    var nome = 'Mozilla';
    function displayNome() {
        console.log(nome);
    }
    return displayNome;
}

var minhaFuncao = criaFuncao();
minhaFuncao();

// ==============================================

function makeAdder(x) {
    return function (y) {
        return x + y;
    }
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

// ==============================================

var makeCounter = function () {
    var privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        incrementa: function() {
            changeBy(1);
        },
        decrementa: function () {
            changeBy(-1);
        },
        valor: function () {
            return privateCounter;
        },
    };
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
console.log(Counter1.valor()); // Resultado 0
Counter1.incrementa();
Counter1.incrementa();
console.log(Counter1.valor()); // Resultado 2
Counter1.decrementa();
console.log(Counter1.valor()); // Resultado 1
console.log(Counter2.valor()); // Resultado 0

// ==============================================

// Não possue closures.
function MeuObjeto(nome, mensagem) {
    this.nome = nome.toString();
    this.mensagem = mensagem.toString();
    this.getNome = function () {
        return this.nome;
    };

    this.getMensagem = function () {
        return this.mensagem
    };
}

function MeuObjeto(nome, mensagem) {
    this.nome = nome.ToString();
    this.mensagem = mensagem.ToString();
}
MeuObjeto.prototype = {
    getName: function () {
        return this.nome
    },
    getMensagem: function () {
        return this.mensagem;
    },
};