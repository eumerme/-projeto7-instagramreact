import Story from "./Story";

const storyArray = [
    {
        storiesBackground:"./images/stories_background.jpg",
        storyImagemUsuario:"./images/simboquinha.png",
        storyNomeUsuario:"simba"   
    },
    {
        storiesBackground:"./images/stories_background.jpg",
        storyImagemUsuario:"./images/pingo2.png",
        storyNomeUsuario:"pingo"  
    },
    {
        storiesBackground:"./images/stories_background.jpg", 
        storyImagemUsuario:"./images/elisregina2.png",
        storyNomeUsuario:"elis_regina" 
    },
    {
        storiesBackground:"./images/stories_background.jpg", 
        storyImagemUsuario:"./images/trontron2.png",
        storyNomeUsuario:"trontron" 
    },
    {
        storiesBackground:"./images/stories_background.jpg", 
        storyImagemUsuario:"./images/jadeB.png",
        storyNomeUsuario:"jade_beatriz"
    },
    {
        storiesBackground:"./images/stories_background.jpg",
        storyImagemUsuario:"./images/melzinha.png",
        storyNomeUsuario:"melzinha"
    },
    {
        storiesBackground:"./images/stories_background.jpg",
        storyImagemUsuario:"./images/cristal.png",
        storyNomeUsuario:"cristal_cristal"
    },
    {
        storiesBackground:"./images/stories_background.jpg" ,
        storyImagemUsuario:"./images/pan2.png",
        storyNomeUsuario:"pandora"
    },
    {
        storiesBackground:"./images/stories_background.jpg",
        storyImagemUsuario:"./images/jupiter.png",
        storyNomeUsuario:"jupiter"
    },
    {
        storiesBackground:"./images/stories_background.jpg",
        storyImagemUsuario:"./images/akaashi.png",
        storyNomeUsuario:"akaashi"
    }
]

export default function CaixaStories () {
    return (
        <div class="caixa-stories">
            {storyArray.map(storyItem => <Story  
                                            storiesBackground={storyItem.storiesBackground}
                                            storyImagemUsuario={storyItem.storyImagemUsuario}
                                            storyNomeUsuario={storyItem.storyNomeUsuario}
                                        />)
            }
            <img class="seta-stories" src="./images/seta-stories.png" alt=""/>
        </div>
    );
}