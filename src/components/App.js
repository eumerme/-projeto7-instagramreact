import Navbar from "./Header/Navbar";
import ContainerConteudo from "./Main/ContainerConteudo";
import BaseMobile from "./Footer/BaseMobile";

export default function App () {
    return (
        <div>
            <Navbar />
            <ContainerConteudo />
            <BaseMobile />
        </div>
    );
}