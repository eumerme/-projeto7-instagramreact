import CaixaStories from "./CaixaStories";
import CaixaPosts from "./CaixaPosts";

export default function CaixaFeed () {
    return (
        <div className="caixa-feed">
            <CaixaStories />
            <CaixaPosts />
        </div>
    );
}