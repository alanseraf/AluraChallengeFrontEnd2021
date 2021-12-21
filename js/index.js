(()=> {
var input = document.querySelector('[data-form-input]');

input.onchange = trocaCor;

function trocaCor (evento){
    evento.preventDefault() /*Impedindo de recarregar a página*/
    corValor = input.value
    console.log(corValor)
    var fundo = document.querySelector('[data-form-fundo]');
    fundo.style.backgroundColor = input.value
}
})()

