class ValidaFormulário{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        // console.log('Formulario não enviado');
        const camposValidos = this.isValid();
        const senhasValidas = this.senhasSaoValidas();
        if(camposValidos && senhasValidas){
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }

    senhasSaoValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');
        if(senha.value !== repetirSenha.value){
            valid = false;
            this.createError(senha, 'As senhas não correspondem');
            this.createError(repetirSenha, 'As senhas não correspondem');
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.createError(senha, 'Senha deve ter entre 6 e 12 caracteres');
        }
        return valid;
    }

    isValid(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            let label = campo.previousElementSibling.innerText
            // console.log(campo);
            // console.log(campo.value);
            if(!campo.value){
                this.createError(campo, `Campo "${label}" não pode estar em branco`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCpf(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;
        if(usuario.length > 12 || usuario.length < 3){
            this.createError(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(campo, 'Nome de usuário deve conter apenas letras e/ou números');
            valid = false;
        }
        return valid;
    }

    validaCpf(campo){
        const cpf = new ValidaCpf(campo.value);
        if(!cpf.valida()){
            this.createError(campo, 'Cpf inválido')
            return false;
        }
        return true;
    }

    createError(campo, msg){
        const div = document.createElement('div'); //cria elemento
        div.innerHTML = msg; //insere texto no elemento
        div.classList.add('error-text'); //adiciona classe no elemento
        campo.insertAdjacentElement('afterend', div); //adiciona apos o fechamento da tag o elemento
    }

}

const valida = new ValidaFormulário();
