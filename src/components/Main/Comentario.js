export default function Comentario (props) {
    return (
        <div class="comentario">
            <p>
                <strong>{props.comentadoPor} </strong>
                {props.comentarioTexto}
            </p>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
    );
}