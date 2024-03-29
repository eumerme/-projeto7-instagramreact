import Post from "./Post";

const postArray = [
     {
        topoImagemUsuario:"./images/akaashi.png",
        topoNomeUsuario:"akaashi",
        conteudo1:"./images/gato-telefone_1.png",
        conteudo2:"",
        curtidasImagemUsuario:"./images/akaashi.png",
        curtidoPorNomes:"trontron, cristal_cristal",
        curtidoPorOutros:"outras 67 pessoas",
        quantidadeComentarios:"Ver todos os 6 comentários",
        comentario:[
            {
                comentadoPor:"cristal_cristal",
                comentarioTexto:"quem é esse gatinho aí?? ^^"
            }
        ]
    },
    {
        topoImagemUsuario:"./images/pan2.png",
        topoNomeUsuario:"pandora",
        conteudo1:"./images/pubb1.png",
        conteudo2:"",
        curtidasImagemUsuario:"./images/akaashi.png",
        curtidoPorNomes:"elis_regina, pingo",
        curtidoPorOutros:"outras 101 pessoas",
        quantidadeComentarios:"Ver todos os 15 comentários",
        comentario:[
            {
                comentadoPor:"trontron",
                comentarioTexto:"êee soneiraaaa kkkk"
            }
        ]
    }, 
    {
        topoImagemUsuario:"./images/post1.png",
        topoNomeUsuario:"m4lu",
        conteudo1:"./videos/video1.mp4",
        conteudo2:"./videos/video1.ogv",
        curtidasImagemUsuario:"./images/post1.png",
        curtidoPorNomes:"simba, melzinha",
        curtidoPorOutros:"outras 147 pessoas",
        quantidadeComentarios:"Ver todos os 16 comentários",
        comentario:[
            {
                comentadoPor:"elis_regina",
                comentarioTexto:"que bruxaria é essa?! *o*"
            }, 
            {
                comentadoPor:"jade_beatriz",
                comentarioTexto:"é fake"
            }
        ]
    },
    {
        topoImagemUsuario:"./images/jupiter.png",
        topoNomeUsuario:"jupiter",
        conteudo1:"./images/dog 1.png",
        conteudo2:"",
        curtidasImagemUsuario:"./images/jupiter.png",
        curtidoPorNomes:"trontron, pandora",
        curtidoPorOutros:"outras 55 pessoas",
        quantidadeComentarios:"Ver todos os 4 comentários",
        comentario:[
            {
                comentadoPor:"m4lu",
                comentarioTexto:"fofuxo s2"
            }
        ]
    },
    {
        topoImagemUsuario:"./images/post2.png",
        topoNomeUsuario:"miliii",
        conteudo1:"./videos/video2.mp4",
        conteudo2:"./videos/video2.ogv",
        curtidasImagemUsuario:"./images/post2.png",
        curtidoPorNomes:"ana_hick, akaashi",
        curtidoPorOutros:"outras 84 pessoas",
        quantidadeComentarios:"Ver todos os 7 comentários",
        comentario:[
            {
                comentadoPor:"pingo",
                comentarioTexto:"awnnn, são seus parentes??"
            },
            {
                comentadoPor:"melzinha",
                comentarioTexto:"que nenezinho"
            }
        ]
    } 
];

export default function CaixaPosts () {
    return (
        <div className="caixa-posts">
           {postArray.map((postItem, index)=> <Post 
                                                key={index}
                                                topoImagemUsuario={postItem.topoImagemUsuario}
                                                topoNomeUsuario={postItem.topoNomeUsuario}
                                                conteudo1={postItem.conteudo1}
                                                conteudo2={postItem.conteudo2}
                                                curtidasImagemUsuario={postItem.curtidasImagemUsuario}
                                                curtidoPorNomes={postItem.curtidoPorNomes}
                                                curtidoPorOutros={postItem.curtidoPorOutros}
                                                quantidadeComentarios={postItem.quantidadeComentarios}   
                                                comentario={postItem.comentario}                                            
                                            />)}
        </div>
    );
}
