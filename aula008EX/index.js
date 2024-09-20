/*
Luiz Otávio Miranda tem 30 anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.925925925925924
Luiz Otávio nasceu em 1980
*/
const nome = 'Valdemar';
const sobrenome = 'Nanon';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80;
let indiceMassaCorporal = peso / (alturaEmCm * alturaEmCm); // peso / altura (altura * altura)
let anoNascimento = 2024 - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg`); 
console.log(`tem ${alturaEmCm} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);