import Sugestao from "./Sugestao";

const sugestaoArray = [
    {
        sugestaoImagemUsuario:"./images/sugestao4.png",
        sugestaoNome:"Aquiles",
        sugestaoUsername:"aquiles_jose"
    },
    {
        sugestaoImagemUsuario:"./images/sugestao2.png",
        sugestaoNome:"pretinha",
        sugestaoUsername:"Carminha"
    },
    {
        sugestaoImagemUsuario:"./images/sugestao5.png",
        sugestaoNome:"darwi_in",
        sugestaoUsername:"Darwin"
    },
    {
        sugestaoImagemUsuario:"./images/sugestao1.png",
        sugestaoNome:"meggyzi",
        sugestaoUsername:"Meggy"
    },

    {
        sugestaoImagemUsuario:"./images/post3.png",
        sugestaoNome:"majuuu",
        sugestaoUsername:"MariaJulia"
    }        
];

export default function CaixaSugestao () {
    return (
        <div className="caixaSugestao">
            <div className="titulo">
                <h1>Sugestões para você</h1> 
                <div>Ver tudo</div>
            </div> 

            {sugestaoArray.map((sugestaoItens, index) => <Sugestao 
                                                            key={index}
                                                            sugestaoImagemUsuario={sugestaoItens.sugestaoImagemUsuario}
                                                            sugestaoNome={sugestaoItens.sugestaoNome}
                                                            sugestaoUsername={sugestaoItens.sugestaoUsername}
                                                        />)}                    
        </div>
    );
}