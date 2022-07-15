import TopoPost from "./TopoPost";
import ConteudoPost from "./ConteudoPost";
import Curtidas from "./Curtidas";
import VerComentarios from "./VerComentarios";
import Comentario from "./Comentario";

export default function Post (props) {
    return (
        <div class="post">
            <TopoPost 
                topoImagemUsuario={props.topoImagemUsuario}
                topoNomeUsuario={props.topoNomeUsuario}
            />
            <ConteudoPost 
                conteudo1={props.conteudo1}
                conteudo2={props.conteudo2}
            />

            <div class="reacoes-post">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>

            <Curtidas 
                curtidasImagemUsuario={props.curtidasImagemUsuario}
                curtidoPorNomes={props.curtidoPorNomes}
                curtidoPorOutros={props.curtidoPorOutros}
            />

            <VerComentarios 
                quantidadeComentarios={props.quantidadeComentarios}
            />

            <Comentario 
                comentadoPor={props.comentadoPor}
                comentarioTexto={props.comentarioTexto}
            />

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