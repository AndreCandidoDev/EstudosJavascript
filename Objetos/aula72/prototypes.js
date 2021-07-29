//construtora -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    //sobresceve o metodo do prototype
    this.nomeCompleto = () => 'ORIGINAL' + this.nome + ' ' + this.sobrenome; 
}

Pessoa.prototype.fala = '@@@@@@@@@@@@@@';

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
};

//no navegador: __proto__

//instancias
const p1 = new Pessoa('teste', 'teste'); //pessoa <- função construtora
const p2 = new Pessoa('teste2', 'teste2');

console.dir(p1);
console.dir(p2);

console.log(Pessoa.prototype);

console.log(p1.nomeCompleto())

// Pessoa.prototype === p1.__proto__ //prototype de todas instancias do objeto sempre sera igual

// cadeia de busca de metodos do js
// p1 --> Pessoa.prototype --> Object.prototype