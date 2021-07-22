function criaCalculadora(){
    return{
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){ //bug, enter não esta funcionando
            this.display.addEventListener('keyup', (e)=>{
                if(e.keycode === 13){
                    this.doOperation();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteOne(){
            this.display.value = this.display.value.slice(0, -1);
        },

        doOperation(){ 
            let conta = this.display.value;
            try{
                conta = eval(conta); //metodo perigoso!
                console.log(conta);
                if(!conta){
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = conta;
            }catch(e){
                alert('Conta inválida!');
                return;
            }
        },

        cliqueBotoes(){
            document.addEventListener('click', (e) =>{ //em arrow function o this nao muda para document
                const el = e.target;
                // console.log(this);
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.deleteOne();
                }
                if(el.classList.contains('btn-eq')){
                    this.doOperation();
                }
                this.display.focus();            
            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
    };
}


const calculadora = criaCalculadora();
calculadora.inicia();