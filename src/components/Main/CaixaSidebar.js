import UsuarioSidebar from "./UsuarioSidebar";
import CaixaSugestao from "./CaixaSugestao";

export default function CaixaSidebar () {
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