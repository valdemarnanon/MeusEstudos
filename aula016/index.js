/*
&& -> false && true -> false "o valor mesmo"
|| -> false || true -> vai retonar "o valor verdadeiro"


FALSY
*false
0
' ' / " " / ` `
null / underfined
NaN
*/
const letras = [
    a = 0,
    b = null,
    c = 'false', // Aqui
    d = false,
    e = NaN
]
console.log(a || b || 'Joãozinho' || c || d || e)