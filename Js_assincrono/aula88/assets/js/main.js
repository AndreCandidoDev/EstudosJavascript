// ajax = asyncronous javascript and xml

// metodo callback ---- metodo antigo
// const request = obj => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true); //open(method, url, is_async)
//     xhr.send(); //envia dados de formulario (usar em metodos POST)

//     xhr.addEventListener('load', (e) => {
//         if(xhr.status >= 200 && xhr.status < 300){
//             obj.success(xhr.responseText);
//         }else{
//             obj.error(xhr.statusText);
//         }
//     });
// };

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); //open(method, url, is_async)
        xhr.send(); //envia dados de formulario (usar em metodos POST)

        xhr.addEventListener('load', (e) => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

// function carregaPagina(el) {
//     const href = el.getAttribute('href');
//     // console.log(href);

//     //objeto de configuração para metodo de callbck
//     // request({
//     //     method: 'GET',
//     //     url: href,
//     //     success(response) {
//     //         carregaResultado(response);
//     //     },
//     //     error(errorText) {
//     //         console.log(errorText);
//     //     }
//     // });

//     //objeto de configuração para promise
//     const objConfig = {
//         method: 'GET',
//         url: href,
//     };

//     request(objConfig).then(response => {
//         carregaResultado(response);
//     }).catch(error => console.log(error));

// }

async function carregaPagina(el){
    const href = el.getAttribute('href');
    const objConfig = {
        method: 'GET',
        url: href,
    };

    try{
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(error){
        console.log(error);
    }
};


function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};
