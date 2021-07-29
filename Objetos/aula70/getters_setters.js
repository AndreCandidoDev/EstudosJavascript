function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, 
        configurable: true,
        get: function(){ //obtem o valor do parametro, chamada é como se fosse variavel de objeto
            return estoquePrivado;
        }, 
        set: function(valor){ //altera o valor do parametro
            if(typeof valor !== 'number'){
                throw new TypeError('Estoque deve ser numero')
            }
            estoquePrivado = valor;
        }
    })
}

const p1 = new Produto('teste', 10, 10);
console.log(p1);

console.log(p1.estoque);
console.log(p1['estoque']);

// p1.estoque = 'algo';
// console.log(p1.estoque);

p1.estoque = 15;
console.log(p1.estoque);

// ###########################################################################################
function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            nome = valor;
        }
    };
}

const p2 = criaProduto('algo');
console.log(p2);
console.log(p2.nome);
p2.nome = 'algo2';
console.log(p2.nome);