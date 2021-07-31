// superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){ 
        console.log(`Saldo insuficiente! ${this.saldo}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(
        `Ag/c: ${this.agencia}/${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`);
};

// ##########################################################################################

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite; 
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){ 
        console.log(`Saldo insuficiente! ${this.saldo}`);
        this.verSaldo();
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

// ##############################################################################################
function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo); 
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

// const conta1 = new Conta(11, 22, 100);
// conta1.depositar(10);
// conta1.sacar(20);
// conta1.sacar(91);

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(10);
console.log("------------------------------------")
const cp = new ContaPoupanca(12, 22, 0);
cp.depositar(10);
cp.sacar(110);
cp.sacar(10);

// Saída:
// Ag/c: 11/22 | Saldo: R$10.00
// Ag/c: 11/22 | Saldo: R$-100.00
// Saldo insuficiente! -100
// Ag/c: 11/22 | Saldo: R$-100.00
// ------------------------------------
// Ag/c: 12/22 | Saldo: R$10.00
// Saldo insuficiente! 10
// Ag/c: 12/22 | Saldo: R$10.00
// Ag/c: 12/22 | Saldo: R$0.00