export default function TopoPost (props) {
    return (
        <div class="topo-post">
            <div class="usuario-topo-post">
                <img src={props.topoImagemUsuario} alt=""/>
                <p>{props.topoNomeUsuario} </p>
            </div>                    
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>  
    );
}