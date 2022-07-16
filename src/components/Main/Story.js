export default function Story (props) {
    return (
        <div className="story">
            <img className="story-background" src={props.storiesBackground} alt=""/>
            <img className="imagem-story" src={props.storyImagemUsuario} alt=""/>
            <p className="usuario-story">{props.storyNomeUsuario}</p>
        </div>
    );
}