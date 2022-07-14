export default function Post (props) {
    const conteudo = tipoDeConteudo (props);

    return (
        <div class="post">
            <div class="topo-post">
                <div class="usuario-topo-post">
                    <img src={props.topoImagemUsuario} alt=""/>
                    <p>{props.topoNomeUsuario} </p>
                </div>                    
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>  

            <div class="conteudo-post">
                {conteudo}  
            </div>

            <div class="reacoes-post">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>

            <div class="curtidas">
                <img src={props.curtidasImagemUsuario} alt=""/>
                <p>
                    Curtido por 
                    <strong> {props.curtidoPorNomes} </strong> 
                    e
                    <strong> {props.curtidoPorOutros}</strong>
                </p>
            </div>

            <div class="ver-comentarios">
                <p>{props.quantidadeComentarios}</p>
            </div>

            <div class="comentario">
                <p>
                    <strong>{props.cementadoPor} </strong>
                    {props.comentarioTexto}
                </p>
                <ion-icon name="heart-outline"></ion-icon>
            </div>

            <div class="publicar-comentario">
                <div class="digitar-comentario">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" placeholder="Adicione um comentário..." />
                </div>
                <div class="botao-publicar">Publicar</div>
            </div>
        </div>
    );
}

function tipoDeConteudo (propsTipoConteudo) {    
    const ehImagem = propsTipoConteudo.conteudo1.substring(0, 9) === "./images/";
    let conteudo;    

    if (ehImagem) {
        conteudo = 
            <img src={propsTipoConteudo.conteudo1} alt=""/>;
        ;
    } else {
        conteudo = 
            <video autoplay muted>
                <source src={propsTipoConteudo.conteudo1} type="video/mp4" />
                <source src={propsTipoConteudo.conteudo2} type="video/ogv" />
            </video>;
        ;
    }

    return conteudo;
}