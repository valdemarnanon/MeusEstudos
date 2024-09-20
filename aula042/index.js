// return
// Retorna um valor
// Termina a função
function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n){
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(2));
console.log(quadruplica(10));