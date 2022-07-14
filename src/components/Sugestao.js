export default function Sugestao (props) {
    return (
        <div class="sugestao">
            <div class="sugestao-usuario">
                <img src={props.sugestaoImagemUsuario} alt=""/>
                <div class="legendaSugestao">
                    <div>{props.sugestaoNome}</div>
                    <div>{props.sugestaoUsername}</div>
                </div>
            </div>
            <div class="seguir">
                Seguir
            </div>
        </div>
    );
}