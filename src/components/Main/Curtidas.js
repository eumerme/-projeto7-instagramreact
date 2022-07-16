export default function Curtidas (props) {
    return (
        <div className="curtidas">
            <img src={props.curtidasImagemUsuario} alt=""/>
            <p>
                Curtido por 
                <strong> {props.curtidoPorNomes} </strong> 
                e
                <strong> {props.curtidoPorOutros}</strong>
            </p>
        </div>
    );
}