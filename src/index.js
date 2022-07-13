import ReactDOM from "react-dom";

function Navbar () {
    return (
        <div class="navbar">
            <TopoDesktop />
            <TopoMobile />
        </div>
    );
}

function TopoDesktop () {
    return (
        <div class="topo-desktop">
          <div class="logo">
            <ion-icon name="logo-instagram"></ion-icon>
            <div></div>
            <img src="./images/logo.png"  alt=""/>
          </div>
         
          <div class="pesquisar">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>
        </div>
    );
}

function TopoMobile () {
    return (
        <div class="topo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="./images/logo.png" alt=""/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}

function ContainerConteudo () {
    <div class="container-conteudo">
        <CaixaFeed />
        <CaixaSidebar />
    </div>
}

function CaixaFeed () {
    return (
        <div class="caixa-feed">
            <CaixaStories />
            <CaixaPosts />
        </div>
    );
}

function CaixaStories () {
    return (
        <div class="caixa-stories">
            <Story />
            <img class="seta-stories" src="./images/seta-stories.png" alt=""/>
        </div>
    );
}

function Story () {
    return (
        <div>
            <div class="story">
                <img class="story-background" src="./images/stories_background.jpg" alt=""/>
                <img class="imagem-story" src="./images/simboquinha.png" alt=""/>
                <p class="usuario-story">
                simba
                </p>
            </div>

            <div class="story">
                <img class="story-background" src="./images/stories_background.jpg" alt=""/>
                <img class="imagem-story" src="./images/pingo2.png" alt=""/>
                <p class="usuario-story">
                pingo
                </p>
            </div>

            <div class="story">
                <img class="story-background" src="./images/stories_background.jpg" alt=""/>
                <img class="imagem-story" src="./images/elisregina2.png" alt=""/>
                <p class="usuario-story">
                elis_regina
                </p>
            </div>

            <div class="story">
                <img class="story-background" src="./images/stories_background.jpg" alt=""/>
                <img class="imagem-story" src="./images/trontron2.png" alt=""/>
                <p class="usuario-story">
                trontron
                </p>
            </div>

            <div class="story">
                <img class="story-background" src="./images/stories_background.jpg" alt=""/>
                <img class="imagem-story" src="./images/jadeB.png" alt=""/>
                <p class="usuario-story">
                jade_beatriz
                </p>
            </div>

            <div class="story">
                <img class="story-background" src="./images/stories_background.jpg" alt=""/>
                <img class="imagem-story" src="./images/melzinha.png" alt=""/>
                <p class="usuario-story">
                melzinha
                </p>
            </div>

            <div class="story">
                <img class="story-background" src="./images/stories_background.jpg" alt=""/>
                <img class="imagem-story" src="./images/cristal.png" alt=""/>
                <p class="usuario-story">
                cristal_cristal
                </p>
            </div>

            <div class="story">
                <img class="story-background" src="./images/stories_background.jpg" alt=""/>
                <img class="imagem-story" src="./images/pan2.png" alt=""/>
                <p class="usuario-story">
                pandora
                </p>
            </div>

            <div class="story">
                <img class="story-background" src="./images/stories_background.jpg" alt=""/>
                <img class="imagem-story" src="./images/jupiter.png" alt=""/>
                <p class="usuario-story">
                jupiter
                </p>
            </div>

            <div class="story">
                <img class="story-background" src="./images/stories_background.jpg" alt=""/>
                <img class="imagem-story" src="./images/akaashi.png" alt=""/>
                <p class="usuario-story">
                akaashi
                </p>
            </div>
        </div>
    )
}

function CaixaPosts () {
    return (
        <div class="caixa-posts">
            <div class="post">

                <div class="topo-post">
                    <div class="usuario-topo-post">
                        <img src="./images/akaashi.png" alt=""/>
                        <p>akaashi</p>
                    </div>                    
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                
                <div class="conteudo-post">
                    <img src="./images/gato-telefone_1.png" alt=""/>
                </div>

                <div class="reacoes-post">
                    <ion-icon id="curtiu" name="heart"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div class="curtidas">
                    <img src="./images/akaashi.png" alt=""/>
                    <p>
                        Curtido por 
                        <strong>trontron, cristal_cristal</strong> 
                        e
                        <strong>outras 67 pessoas</strong>
                    </p>
                </div>

                <div class="ver-comentarios">
                    <p>Ver todos os 6 comentários</p>
                </div>

                <div class="comentario">
                    <p>
                        <strong>cristal_cristal</strong>
                        quem é esse gatinho aí?? ^^
                    </p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                
                <div class="publicar-comentario">
                    <div class="digitar-comentario">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input type="text" placeholder="Adicione um comentário..." />
                    </div>
                    <div class="botao-publicar">Publicar</div>
                </div>
            </div>

            <div class="post">
                <div class="topo-post">
                    <div class="usuario-topo-post">
                        <img src="./images/pan2.png" alt=""/>
                        <p>pandora</p>
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                
                <div class="conteudo-post">
                    <img src="./images/pubb1.png" alt=""/>
                </div>            

                <div class="reacoes-post">
                    <ion-icon id="curtiu" name="heart"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div class="curtidas">
                    <img src="./images/pan2.png" alt=""/>
                    <p>
                        Curtido por 
                        <strong>elis_regina, pingo</strong> 
                        e
                        <strong>outras 101 pessoas</strong>
                    </p>
                </div>

                <div class="ver-comentarios">
                    <p>Ver todos os 15 comentários</p>
                </div>

                <div class="comentario">
                    <p>
                        <strong>trontron</strong>
                        êee soneiraaaa kkkk
                    </p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>

                <div class="publicar-comentario">
                    <div class="digitar-comentario">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input type="text" placeholder="Adicione um comentário..." />
                    </div>
                    <div class="botao-publicar">Publicar</div>
                </div>
            </div>

            <div class="post">
                <div class="topo-post">
                    <div class="usuario-topo-post">
                        <img src="./images/post1.png" alt=""/>
                        <p>m4lu</p>
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo-post">
                    <video autoplay muted>
                        <source src="./videos/video1.mp4" type="video/mp4" />
                        <source src="./videos/video1.ogv" type="video/ogv" />
                    </video>
                </div>

                <div class="reacoes-post">
                    <ion-icon id="curtiu" name="heart"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div class="curtidas">
                    <img src="./images/post1.png" alt=""/>
                    <p>Curtido por 
                        <strong>simba, melzinha</strong> 
                        e
                        <strong>outras 147 pessoas</strong>
                    </p>
                </div>

                <div class="ver-comentarios">
                    <p>Ver todos os 16 comentários</p>
                </div>

                <div class="comentario">
                    <p>
                        <strong>elis_regina</strong>
                        que bruxaria é essa?! *o*
                    </p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>

                <div class="comentario">
                    <p>
                        <strong>jade_beatriz</strong>
                        é fake
                    </p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>

                <div class="publicar-comentario">
                    <div class="digitar-comentario">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input type="text" placeholder="Adicione um comentário..." />
                    </div>
                    <div class="botao-publicar">Publicar</div>
                </div>
            </div>

            <div class="post">
                <div class="topo-post">
                    <div class="usuario-topo-post">
                        <img src="./images/jupiter.png" alt=""/>
                        <p>jupiter</p>
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo-post">
                    <img src="./images/dog 1.png" alt=""/>
                </div>

                <div class="reacoes-post">
                    <ion-icon id="curtiu" name="heart"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div class="curtidas">
                    <img src="./images/jupiter.png" alt=""/>
                    <p>
                        Curtido por 
                        <strong>jade_beatriz, pandora</strong> 
                        e
                        <strong>outras 55 pessoas</strong>
                    </p>
                </div>

                <div class="ver-comentarios">
                    <p>Ver todos os 4 comentários</p>
                </div>

                <div class="comentario">
                    <p>
                        <strong>m4lu</strong>
                        fofuxo s2
                    </p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>

                <div class="publicar-comentario">
                    <div class="digitar-comentario">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input type="text" placeholder="Adicione um comentário..." />
                    </div>
                    <div class="botao-publicar">Publicar</div>
                </div>
            </div>

            <div class="post">
                <div class="topo-post">
                    <div class="usuario-topo-post">
                        <img src="./images/post2.png" alt=""/>
                        <p>miliii</p>
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo-post">
                    <video autoplay muted>
                        <source src="./videos/video2.mp4" type="video/mp4" />
                        <source src="./videos/video2.ogv" type="video/ogv" />
                    </video>
                </div>

                <div class="reacoes-post">
                    <ion-icon id="curtiu" name="heart"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

                <div class="curtidas">
                    <img src="./images/post2.png" alt=""/>
                    <p>
                        Curtido por 
                        <strong>ana_hick, akaashi</strong> 
                        e
                        <strong>outras 84 pessoas</strong>
                    </p>
                </div>

                <div class="ver-comentarios">
                    <p>Ver todos os 7 comentários</p>
                </div>

                <div class="comentario">
                    <p>
                        <strong>pingo</strong>
                        awnnn, são seus parentes??
                    </p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>

                <div class="publicar-comentario">
                    <div class="digitar-comentario">
                        <ion-icon name="happy-outline"></ion-icon>
                        <input type="text" placeholder="Adicione um comentário..." />
                    </div>
                    <div class="botao-publicar">Publicar</div>
                </div>
            </div>
        </div>
    );
}

function CaixaSidebar () {
    return (
        <div class="caixa-sidebar">
            <UsuarioSidebar />
            <CaixaSugestao />         
      
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma     
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
      </div>
    );
}

function UsuarioSidebar () {
    return (
        <div class="usuario-sidebar">
            <img src="./images/sugestao3.png" alt=""/>
            <div class="identificacao">
                <div>aurorinha</div>
                <div>Aurora</div>
            </div>
        </div>
    );
}

function CaixaSugestao () {
    return (
        <div class="caixaSugestao">
            <div class="titulo">
                <h1>Sugestões para você</h1> 
                <div>Ver tudo</div>
            </div>            
            
            <Sugestao />
        </div>
    );
}

function Sugestao () {
    return (
        <div>
            <div class="sugestao">
                <div class="sugestao-usuario">
                    <img src="./images/sugestao4.png" alt=""/>
                    <div class="legendaSugestao">
                        <div>Aquiles</div>
                        <div>aquiles_jose</div>
                    </div>
                </div>
                <div class="seguir">
                    Seguir
                </div>
            </div>

            <div class="sugestao">
                <div class="sugestao-usuario">
                    <img src="./images/sugestao2.png" alt=""/>
                    <div class="legendaSugestao">
                        <div>pretinha</div>
                        <div>Carminha</div>
                    </div>
                </div>
                <div class="seguir">
                    Seguir
                </div>
            </div>

            <div class="sugestao">
                <div class="sugestao-usuario">
                    <img src="./images/sugestao5.png" alt=""/>
                    <div class="legendaSugestao">
                        <div>darwi_in</div>
                        <div>Darwin</div>
                    </div>
                </div>
                <div class="seguir">
                    Seguir
                </div>
            </div>

            <div class="sugestao">
                <div class="sugestao-usuario">
                    <img src="./images/sugestao1.png" alt=""/>
                    <div class="legendaSugestao">
                        <div>meggyzi</div>
                        <div>Meggy</div>
                    </div>
                </div>
                <div class="seguir">
                    Seguir
                </div>
            </div>

            <div class="sugestao">
                <div class="sugestao-usuario">
                    <img src="./images/post3.png" alt=""/>
                    <div class="legendaSugestao">
                        <div>majuuu</div>
                        <div>Maria Julia</div>
                    </div>
                </div>
                <div class="seguir">
                    Seguir
                </div>
            </div>
        </div>
    );
}

function BaseMobile () {
    return (
        <div class="base-mobile">
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </div>
    );
}

function App () {
    return (
        <div>
            <Navbar />
            <ContainerConteudo />
            <BaseMobile />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));
