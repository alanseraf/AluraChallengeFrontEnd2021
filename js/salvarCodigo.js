/* Criar Botão */

const botaoSalvar = document.querySelector('[data-button-salvar]')
// const codigo = document.querySelector('[data-form-editor]')
const codigoDestaque = document.querySelector('[data-form-codigo]')
const tituloTag = document.querySelector('[data-form-titulo]')
const descricaoTag = document.querySelector('[data-form-descricao]')
const input = document.querySelector('[data-form-input]');


//mudar o content editable para false

// Criar função para o mesmo

/*Criar event listener do click do botão salvar*/
botaoSalvar.addEventListener('click', ()=>{
    const tituloValor = tituloTag.value
    console.log(tituloValor);
    const descricaoValor = descricaoTag.value
    console.log(descricaoValor)
    const codigoDestaqueValor = codigoDestaque.innerText
    console.log(codigoDestaqueValor);
    const corValor = input.value
    console.log(corValor)
    
})



// Colar conteúdo na página comunidade

//Copiar estilo do editor comunidade
//Inserir o conteudo do  codigo-wrapper
    //const areaDoCodigo = document.querySelector('.codigo-wrapper')
    //const codigo = areaDoCodigo.innerText
    //areaDoCodigo.innerHTML =`<code class="editor hljs ${linguagem.value}" contenteditable="false" aria-label="Editor de código"></code>`
//inserir tituloValor
// Inserir DescricaoValor

//criar html
/*
        export const Tarefa = ({ valor, dataFormatada }) => {

            const tarefa = document.createElement('li')
            tarefa.classList.add('task')
            const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`
            tarefa.innerHTML = conteudo    
            tarefa.appendChild(BotaoConclui())
            tarefa.appendChild(BotaoDeleta())
            
            return tarefa
        }
*/


/*
Salvar no localStorage
const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
const tarefasAtualizadas = [...tarefas, dados]
localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas)) //chave e valor 

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = " "
    tarefasCadastradas.forEach((tarefa) => {
        lista.appendChild(Tarefa(tarefa))
    })
}

carregaTarefa()
1.const que Percorre a arvore
2.const que acessa o local storage
3.limpa os dados anteriores
4.Inseri/Cria o html preenchidos a partir de cada tarefa

*/