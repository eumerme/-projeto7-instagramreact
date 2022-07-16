export default function Sugestao (props) {
    return (
        <div className="sugestao">
            <div className="sugestao-usuario">
                <img src={props.sugestaoImagemUsuario} alt=""/>
                <div className="legendaSugestao">
                    <div>{props.sugestaoNome}</div>
                    <div>{props.sugestaoUsername}</div>
                </div>
            </div>
            <div className="seguir">
                Seguir
            </div>
        </div>
    );
}