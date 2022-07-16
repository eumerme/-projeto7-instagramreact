import TopoDesktop from "./TopoDesktop";
import TopoMobile from "./TopoMobile";

export default function Navbar () {
    return (
        <div className="navbar">
            <TopoDesktop />
            <TopoMobile />
        </div>
    );
}