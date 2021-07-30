// Produto -> aumento, desconto
// camiseta -> cor , caneca -> material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

// ############################################################################################

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor; //atributo especifico de camiseta
}

// o proto da camiseta ira herdar o proto do produto
Camiseta.prototype = Object.create(Produto.prototype); //cria objeto Produto.prototype em camiseta.prototype
Camiseta.prototype.constructor = Camiseta //redefine construtor de Camiseta para Camiseta 

Camiseta.prototype.aumento = function(percentual){ //sobrescreve o metodo aumento de produto
    this.preco = this.preco + (this.preco*percentual)/100;
}

// ##############################################################################################

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable:false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

// ##############################################################################################
const produto = new Produto('testep', 10);

const camiseta = new Camiseta('teste', 10, 'azul');

const caneca = new Caneca('testecaneca', 10, 'vidro', 5)

console.log(produto);
console.log(camiseta);
console.log(caneca);
// camiseta.aumento(10);
// console.log(camiseta);