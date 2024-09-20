// Superclass or Classe pai
// Minha função construtora 
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}
// prototype metodo
Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return
    }
    this.saldo -= valor;
    this.verSaldo();
};
// prototype
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};
// prototype
Conta.prototype.verSaldo = function() {
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    ); 
};

// Função construtora filha
function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    
    this.limite = limite;
}
// prototype do pai para o filho
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

// Herdando 
CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return
    }
    this.saldo -= valor;
    this.verSaldo();
};

// Função construtora filha
function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
// protoype do pa para o filho
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new CC(11, 20, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(110);

console.log();

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);
// POLIMORFISMO