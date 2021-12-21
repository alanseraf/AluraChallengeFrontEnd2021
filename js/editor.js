      
const linguagem = document.querySelector('.linguagem')
const areaDoCodigo = document.querySelector('.codigo-wrapper')
const botao = document.querySelector('.highlight')

function aplicaHighLight(){
    const codigo = areaDoCodigo.innerText
    areaDoCodigo.innerHTML =`<code class="editor hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>`
    areaDoCodigo.querySelector('code').textContent = codigo
    hljs.highlightElement(areaDoCodigo.querySelector('code'))
}

botao.addEventListener('click', ()=>{
    console.log("Funcionando")
    aplicaHighLight()   
})