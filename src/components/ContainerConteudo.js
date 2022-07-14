import CaixaFeed from "./CaixaFeed";
import CaixaSidebar from "./CaixaSidebar";

export default function ContainerConteudo () {
   return (
        <div class="container-conteudo">
            <CaixaFeed />
            <CaixaSidebar />
        </div>
   );
}