//Funções que retornam objetos (factory functions)
//constructor function --> faz o mesmo porem é relacionado a orientação a objetos
function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`; //so obtem o valor logo pode ser um getter
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto){
            return `${this.nome} está ${assunto} e pesa ${this.peso}`; //this equivale ao self
        },

        altura: altura,
        peso: peso,
        // imc(){
        //     const indice = this.peso/(this.altura**2);
        //     return indice.toFixed(2);
        // }

        // Getter
        get imc(){
            const indice = this.peso/(this.altura**2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('teste', 'algo', 1.85, 60);
const p2 = criaPessoa('outro', 'teste', 1.50, 67);
console.log(p1);
p1.nomeCompleto = 'algo algo algo';
console.log(p1);
// console.log(p1.fala('falando alguma coisa'));
// console.log(p1.imc()); 
// console.log(p1.imc); //se declarado com get a função finge ser atributo
// console.log(p1.nomeCompleto());
// console.log(p1.nomeCompleto);
// console.log(p2);
// console.log(p2.imc());
// console.log(p2.imc);
