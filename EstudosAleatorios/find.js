// const array1 = [5, 12, 8, 130, 44];

// const found = array1.findIndex(a => a > 10);
// console.log(found);

const inventario = [
    { name: 'maçã', quantia: 2},
    { name: 'ameixa', quantia: 3},
    { name: 'cerejas', quantia: 5},
];

const resultado = inventario.find(a => a.name === 'cerejas')

// function isCherries(fruit) {
//     return fruit.name === "cerejas";
// }

console.log(resultado);