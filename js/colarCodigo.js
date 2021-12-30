

const ValoresSalvos = JSON.parse(localStorage.getItem("CodigoSalvo")) || []

function inserirCodigo () {

    const DivContainer = document.querySelector('[data-grid-comunidade]')
    const novaDiv = document.createElement(`div`)
    
    DivContainer.appendChild(novaDiv)

    const conteudo =  
    `<div class="editor-fundo" data-form-fundo-1>
        <div class="fundo-preto">
            <ul class="bolinhas">
                <img class="bolinha-vermelha" src="img/bolinha_vermelha.svg" alt>
                <img src="img/bolinha_amarela.svg" alt>
                <img src="img/bolinha_verde.svg" alt>
            </ul>
            <div class="codigo-wrapper">
                <code class="editor hljs" contenteditable="false" aria-label="Editor de código"></code>
            </div>
        </div>
    </div>
    <div class="rodape__editor_container">
        <h1 data-content-titulo>teste</h1>
        <p data-content-descricao>teste</p>
        <div class="rodape__editor">
            <div class="rodape__editor__interacao">
                <div class="rodape__editor__comentarios">
                    <img alt="comentários" class="rodape__editor__comentario__imagem" src="img/icone_comentario.svg">
                    <p>9<P>
                </div>
                <div class="rodape__editor__curtirdas">
                    <img alt="curtidas" class="rodape__editor__curtidas__imagem" src="img/icone_coracao.svg">
                    <p>9<P>
                </div>
            </div>
            <div class="rodape__editor__avatar">
                <img class="perfil" src="img/avatar.jpg" alt="Fotografia de Perfil">
                <p>@Harry</p>
            </div>
        </div>
    </div>
</div>`;

    novaDiv.innerHTML = conteudo;
    let fundo = document.querySelector('[data-form-fundo-1]');
    const cor = ValoresSalvos[1].corValor
    console.log(cor);
    fundo.style.backgroundColor = cor


}

inserirCodigo()