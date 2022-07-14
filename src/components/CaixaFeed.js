import CaixaStories from "./CaixaStories";
import CaixaPosts from "./CaixaPosts";

export default function CaixaFeed () {
    return (
        <div class="caixa-feed">
            <CaixaStories />
            <CaixaPosts />
        </div>
    );
}