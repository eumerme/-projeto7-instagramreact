export default function TipoDeConteudo (propsTipoConteudo) {    
    const ehImagem = propsTipoConteudo.conteudo1.substring(0, 9) === "./images/";
    let conteudo;    

    if (ehImagem) {
        conteudo = 
            <img src={propsTipoConteudo.conteudo1} alt=""/>;
        ;
    } else {
        conteudo = 
            <video autoPlay muted>
                <source src={propsTipoConteudo.conteudo1} type="video/mp4" />
                <source src={propsTipoConteudo.conteudo2} type="video/ogv" />
            </video>;
        ;
    }

    return conteudo;
}