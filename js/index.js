(()=> {
const input = document.querySelector('[data-form-input]');

input.onchange = trocaCor;

function trocaCor (evento){
    evento.preventDefault() /*Impedindo de recarregar a página*/
    const corValor = input.value
    console.log(corValor)
    const fundo = document.querySelector('[data-form-fundo]');
    fundo.style.backgroundColor = input.value
}
})()

