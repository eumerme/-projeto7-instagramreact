import React from "react";

export default function Comentario (props) {
    let [curtirPost, setcurtirPost] = React.useState("heart-outline");
    let [coracaoVermelho, setcoracaoVermelho] = React.useState("");

    const curtirDescurtirIcone = () => {
        if(curtirPost === "heart-outline") {
            setcoracaoVermelho(coracaoVermelho = "curtiu");
            setcurtirPost(curtirPost = "heart");                    
        }else {
            setcurtirPost(curtirPost = "heart-outline");
            setcoracaoVermelho(coracaoVermelho = "");
        }
    }

    return (
        <div className="comentario">
            <p>
                <strong>{props.comentario.comentadoPor} </strong>
                {props.comentario.comentarioTexto}
            </p>
            <ion-icon id={coracaoVermelho} name={curtirPost} onClick={curtirDescurtirIcone}></ion-icon>
        </div>
    );
}