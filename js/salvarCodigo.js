/* Criar Botão */

const botaoSalvar = document.querySelector('[data-button-salvar]')
const codigo = document.querySelector('[data-form-editor]')
const tituloTag = document.querySelector('[data-form-titulo]')
const descricaoTag = document.querySelector('[data-form-descricao]')


//mudar o content editable para false

// Criar função para o mesmo

/*Criar event listener do click do botão salvar*/
botaoSalvar.addEventListener('click', ()=>{
    const tituloValor = tituloTag.value
    console.log(tituloValor);
    const descricaoValor = descricaoTag.value
    console.log(descricaoValor)
})
// Colar conteúdo na página comunidade