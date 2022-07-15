export default function Story (props) {
    return (
        <div class="story">
            <img class="story-background" src={props.storiesBackground} alt=""/>
            <img class="imagem-story" src={props.storyImagemUsuario} alt=""/>
            <p class="usuario-story">{props.storyNomeUsuario}</p>
        </div>
    );
}