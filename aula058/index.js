// Retorne a some do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir ( somar tudo )
const numeros = [5, 50 ,80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
    .filter(a => a % 2 === 0)
    .map(a => a * 2)
    .reduce((ac, valor) => ac + valor, 0);
    
console.log(numerosPares)
// [ 50, 80, 2, 8, 22 ] pares
// [ 100, 160, 4, 16, 44 ] dobro