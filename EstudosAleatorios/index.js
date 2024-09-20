// RECURSIVIDADE
function fatorial(n){
    // n! = n x (n-1)!
    // 1! = 1
    // 5! = 5 x 4 x 2 x 1
    // 5! = 5 x 4!
    if (n == 1) {
        return 1
    } else{
        return n * fatorial(n-1)
    }
};
console.log(fatorial(5));


function fatorial(n){
    	let fat = 1;
        for(let i = n; i > 1; i--){
            fat *= i;
        }
        return fat
};

console.log(fatorial(10));


// 5! = 5 x 4 x 2 x 1


let v = function(x){
    return x*2
}

console.log(v[5]);

function soma(n1=0, n2=0){
    return n1 + n2
};

console.log(soma(2));


function parimp(n){
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
};

let res = parimp(5)
console.log(res);