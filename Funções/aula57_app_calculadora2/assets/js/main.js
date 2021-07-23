function CriaCalculadora(){
    this.display = document.querySelector('.display');
    this.btnClear = document.querySelector('.btn-clear');

    this.inicia = () => {
        this.cliqueBotoes();
        // this.capturaEnter();
    }

    this.capturaEnter = () => { //nao esta funcionando
        document.addEventListener('keypress', e => {
            if(e.keycode === 13){
                this.doOperation();
            } 
        });
    }

    this.clearDisplay=() => this.display.value = '';

    this.deleteOne = () => this.display.value = this.display.value.slice(0, -1);

    this.doOperation = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta); //metodo perigoso!
            if (Number.isNaN(conta) || typeof conta !== 'number') {
                alert('Conta inválida');
                return;
            }
            this.display.value = conta;
        } catch (e) {
            alert('Conta inválida!');
            return;
        }
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => { 
            const el = e.target;
            if (el.classList.contains('btn-num')) this.btnParaDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.deleteOne();
            if (el.classList.contains('btn-eq')) this.doOperation();
            this.display.focus();
        });
    };

    this.btnParaDisplay = (valor) => {
        this.display.value += valor;
        // this.display.focus();
    }
}

const calculadora = new CriaCalculadora();
calculadora.inicia();
