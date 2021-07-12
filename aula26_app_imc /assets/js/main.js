function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    //imc = peso/altura²

    function recebeEventoForm(evento){
        
        evento.preventDefault();
        resultado.innerHTML = ``;

        let peso = form.querySelector('.peso');
        peso = Number(peso.value);
        console.log(peso);
        let altura = form.querySelector('.altura');
        altura = Number(altura.value);
        console.log(altura);
        let imc = peso / (altura*altura);
        console.log(imc);
        imc = Number(imc.toFixed(2));
        console.log(typeof imc);

        let style = 'background:#87ffe3;';
        let style_error = 'background:#ff3833';

        if (typeof peso !== 'number'){
            resultado.innerHTML += `<p style="${style_error}">Peso inválido</p>`;
        }

        if (typeof altura !== 'number'){
            resultado.innerHTML += `<p style="${style_error}">Altura inválida</p>`;
        }

        if (imc < 18.5){
            resultado.innerHTML += `<p style="${style}">Seu IMC é: ${imc} (Abaixo do peso)</p>`;
        }else if(imc >= 18.5 && imc <= 24.9){
            resultado.innerHTML += `<p style="${style}">Seu IMC é: ${imc} (Peso normal)</p>`;
        }else if(imc >= 25 && imc <= 29.9){
            resultado.innerHTML += `<p style="${style}">Seu IMC é: ${imc} (Sobrepeso)</p>`;
        }else if(imc >= 30 && imc <= 34.9){
            resultado.innerHTML += `<p style="${style}">Seu IMC é: ${imc} (Obesidade grau 1)</p>`;
        }else if(imc >= 35 && imc <= 39.9){
            resultado.innerHTML += `<p style="${style}">Seu IMC é: ${imc} (Obesidade grau 2)</p>`;
        }else if(imc >= 40){
            resultado.innerHTML += `<p style="${style}">Seu IMC é: ${imc} (Obesidade grau 3)</p>`;
        }else{
            resultado.innerHTML += `<p style="${style_error}">Valor inválido</p>`;
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo()