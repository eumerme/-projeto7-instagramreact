export default function TopoPost (props) {
    return (
        <div className="topo-post">
            <div className="usuario-topo-post">
                <img src={props.topoImagemUsuario} alt=""/>
                <p>{props.topoNomeUsuario} </p>
            </div>                    
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>  
    );
}