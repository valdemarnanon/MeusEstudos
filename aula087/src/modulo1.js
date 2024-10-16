const nome = 'Valdemar';
const sobrenome = 'Nanon';
const idade = 21;

export const veses = (x, y) => x * y;

export function soma(x, y){
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export { nome, sobrenome, idade };

// const nome = 'Valdemar';
// const sobrenome = 'Nanon';
// const idade = 21;

// function soma(x, y) {
//     return x + y;
// }

// export { nome as nome2, sobrenome, idade, soma };

