import TopoDesktop from "./TopoDesktop";
import TopoMobile from "./TopoMobile";

export default function Navbar () {
    return (
        <div class="navbar">
            <TopoDesktop />
            <TopoMobile />
        </div>
    );
}