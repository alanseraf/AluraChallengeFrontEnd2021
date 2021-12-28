(()=> {

const input = document.querySelector('[data-form-input]');
input.onchange = trocaCor;

function trocaCor(){
    const corValor = input.value
    console.log(corValor)
    const fundo = document.querySelector('[data-form-editor]');
    fundo.style.backgroundColor = corValor
}
})()

