function validaCpf(cpf){
    this.cpf = String(cpf);
    this.auxCpf = String(cpf);
};

validaCpf.prototype.convertToArray = function(){
    let aux = this.cpf.replace(/\D+/g, '');
    this.cpf = Array.from(aux);
};

validaCpf.prototype.removeDigits = function(){
    this.convertToArray();
    this.second = this.cpf.pop();
    this.first = this.cpf.pop();
    this.rest = this.cpf.join('');
};

validaCpf.prototype.firstValidation = function(){
    this.removeDigits();
    const fatores = [10,9,8,7,6,5,4,3,2];
    let soma1 = 0;
    for(let i in fatores){
        soma1 += this.cpf[i]*fatores[i];
    }
    this.firstCheck = 11 - (soma1 % 11);
    if(this.firstCheck > 9){
        this.firstCheck = 0;
    }
};

validaCpf.prototype.secondValidation = function(){
    this.firstValidation();
    this.cpf = this.cpf.concat(this.firstCheck);
    const fatores = [11,10,9,8,7,6,5,4,3,2];
    let soma2 = 0;
    for(let i in fatores){
        soma2 += Number(this.cpf[i])*fatores[i];
    }
    this.secondCheck = 11 - (soma2 % 11);
    if(this.secondCheck > 9){
        this.secondCheck = 0;
    }
}

validaCpf.prototype.validation = function(){
    this.secondValidation();
    let ultimos = this.auxCpf.split('-');
    let ultimosCheck = String(this.firstCheck)+String(this.secondCheck);
    if(ultimosCheck === ultimos[1]) return true;
    else return false;
}

verificaCpf = (cpf) => {
    const testar = new validaCpf(cpf);
    if(testar.validation) console.log('Cpf valido')
    else console.log('Cpf inválido');
}

verificaCpf('705.484.450-52');

// const test = new validaCpf('705.484.450-52');
// console.log(test);
// test.validation();
