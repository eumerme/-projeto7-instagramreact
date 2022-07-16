import CaixaFeed from "./CaixaFeed";
import CaixaSidebar from "./CaixaSidebar";

export default function ContainerConteudo () {
   return (
        <div className="container-conteudo">
            <CaixaFeed />
            <CaixaSidebar />
        </div>
   );
}