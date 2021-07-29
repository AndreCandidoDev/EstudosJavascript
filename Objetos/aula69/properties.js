function Produto(nome, preco, estoque){
    //atributos publicos (forma mais comum de declarar propriedades de objeto)
    // this.nome = nome;
    // this.preco = preco;

    // equivale a forma anterior porem garante maior controle dos atributos de objeto
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //propriedade é exibida como variavel de objeto (mostra a chave)
        value: estoque, //atribui o valor da propriedade ao parametro estoque (valor da chave)
        // value: function(){ return estoque; },
        writable: true, //define se a propriedade pode ou não ser alterada (pode alterar ou não o valor da chave)
        configurable: false // define se pode apagar ou reconfigurar a chave (pode redeclarar no objeto)
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: false
        },
    })
}

const p1 = new Produto('Camiseta', 10, 10);
console.log(p1);
console.log(Object.keys(p1)); //mostra as chaves (sem os valores) em um array

for(let chave in p1){
    console.log(chave);
}

// console.log(p1);
// console.log(p1.estoque());
// p1.estoque = 100
// delete p1.estoque;
// console.log(p1);