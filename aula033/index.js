const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Continue = continua pra próxima iteração
// Break = sai do laço

let i = 0; 
do {
    let numero = numeros[i]

    if (numero === 2) {
        console.log('Pulei o número 2...');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) {
        console.log('Achei o número 7...');
        i++;
        break;
    }

    i++;
} while (i < numeros.length) 