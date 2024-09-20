// defineProperty -> Getter e Setter
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,    // Mostra a chave
        configurable: true,  // Configuravel
        get: () => estoquePrivado,
        set: (valor) => {
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor
        }
    });
}

function criaProduto() {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}

// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1)
// console.log(p1.estoque)
const p2 = criaProduto('Camiseta')
p2.nome = 'Qualquer coisa.';
console.log(p2.nome)
