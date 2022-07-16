import React from "react";

export default function Comentario (props) {
    let [curtirPost, setcurtirPost] = React.useState("heart-outline");
    let [coracaoVermelho, setcoracaoVermelho] = React.useState("");

    return (
        <div className="comentario">
            <p>
                <strong>{props.comentadoPor} </strong>
                {props.comentarioTexto}
            </p>
            <ion-icon id={coracaoVermelho} name={curtirPost} onClick={() => {
                    if(curtirPost === "heart-outline") {
                        setcoracaoVermelho(coracaoVermelho = "curtiu");
                        setcurtirPost(curtirPost = "heart");                    
                    }else {
                        setcurtirPost(curtirPost = "heart-outline");
                        setcoracaoVermelho(coracaoVermelho = "");
                    }}}
            ></ion-icon>
        </div>
    );
}