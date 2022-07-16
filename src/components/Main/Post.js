import React from "react";
import TopoPost from "./TopoPost";
import TipoDeConteudo from "./TipoDeConteudo";
import Curtidas from "./Curtidas";
import VerComentarios from "./VerComentarios";
import Comentario from "./Comentario";

export default function Post (props) {
    let [curtirPost, setcurtirPost] = React.useState("heart-outline");
    let [coracaoVermelho, setcoracaoVermelho] = React.useState("");

    return (
        <div className="post">
            <TopoPost 
                topoImagemUsuario={props.topoImagemUsuario}
                topoNomeUsuario={props.topoNomeUsuario}
            />

            <div className="conteudo-post" onClick={() => {
                if(curtirPost === "heart-outline") {
                    setcoracaoVermelho(coracaoVermelho = "curtiu");
                    setcurtirPost(curtirPost = "heart");                    
                }
            }}>
                {TipoDeConteudo(props)}  
            </div>  

            <div className="reacoes-post">
                <ion-icon id={coracaoVermelho} name={curtirPost} onClick={() => {
                    if(curtirPost === "heart-outline") {
                        setcoracaoVermelho(coracaoVermelho = "curtiu");
                        setcurtirPost(curtirPost = "heart");                    
                    }else {
                        setcurtirPost(curtirPost = "heart-outline");
                        setcoracaoVermelho(coracaoVermelho = "");
                    }
                }}></ion-icon>
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

            <div className="publicar-comentario">
                <div className="digitar-comentario">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input type="text" placeholder="Adicione um comentário..." />
                </div>
                <div className="botao-publicar">Publicar</div>
            </div>
        </div>
    );
}