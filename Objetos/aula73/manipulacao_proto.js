// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__ : Object.prototype
};

const objB = {
    chaveB: 'B'
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); //prototype de B recebe o de A
Object.setPrototypeOf(objC, objB); //prototype de C recebe o de B

console.log(objB.chaveA);
console.log(objC.chaveA);

console.log(Object.getPrototypeOf(objC)); //pega o prototype de C

// ############################################################################################
function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco*percentual)/100;
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco*percentual)/100;
}

const p1 = new Produto('teste', 100);
console.log(p1);
p1.desconto(10);
console.log(p1.preco);
p1.aumento(10);
console.log(p1.preco);

// ############################################################################################
const p2 = {
    nome: 'caneca',
    preco: 20
}

Object.setPrototypeOf(p2, Produto.prototype); //p2 recebe proto de produto, seu tipo agora é do tipo Produto
p2.aumento(10);
console.log(p2);
console.log(p2.preco);

// ############################################################################################
// const p3 = Object.create(Object.prototype); //cria objeto vazio
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable:true,
        configurable:true,
        enumerable:true,
        value: 120
    },
    tamanho: {
        writable:true,
        configurable:true,
        enumerable:true,
        value: 42
    },
    tamanho2: {
        writable:true,
        configurable:true,
        enumerable:true,
        value: 43
    }
}); //cria objeto do tipo Produto ja com seus metodos e atributos imbutidos

p3.aumento(10);
console.log(p3);