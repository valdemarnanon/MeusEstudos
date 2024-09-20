const pessoas = [
    { id: 3, nome: 'Valdemar'},
    { id: 2, nome: 'Chelsea'},
    { id: 1, nome: 'Deca'},
];

// const novasPessoas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     novasPessoas[id] = { ...pessoa };
// }

const novasPessoas = new Map();
for (let pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa });
}

// for (let pessoas of novasPessoas.values()) {
//     console.log(pessoas);
// }

novasPessoas.delete(2);
console.log(novasPessoas);