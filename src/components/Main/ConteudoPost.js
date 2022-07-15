export default function ConteudoPost (props) {
    const conteudo = tipoDeConteudo(props);

    return (
        <div class="conteudo-post">
            {conteudo}  
        </div>
    );
}

function tipoDeConteudo (propsTipoConteudo) {    
    const ehImagem = propsTipoConteudo.conteudo1.substring(0, 9) === "./images/";
    let conteudo;    

    if (ehImagem) {
        conteudo = 
            <img src={propsTipoConteudo.conteudo1} alt=""/>;
        ;
    } else {
        conteudo = 
            <video autoplay muted>
                <source src={propsTipoConteudo.conteudo1} type="video/mp4" />
                <source src={propsTipoConteudo.conteudo2} type="video/ogv" />
            </video>;
        ;
    }

    return conteudo;
}