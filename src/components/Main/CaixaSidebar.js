import UsuarioSidebar from "./UsuarioSidebar";
import CaixaSugestao from "./CaixaSugestao";

export default function CaixaSidebar () {
    return (
        <div className="caixa-sidebar">
            <UsuarioSidebar />
            <CaixaSugestao />         
      
            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
                Localizações • Contas mais relevantes • Hashtags • Idioma     
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
      </div>
    );
}