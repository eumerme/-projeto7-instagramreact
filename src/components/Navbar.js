export default function Navbar () {
    return (
        <div class="navbar">
            <TopoDesktop />
            <TopoMobile />
        </div>
    );
}

function TopoDesktop () {
    return (
        <div class="topo-desktop">
          <div class="logo-insta">
                <ion-icon name="logo-instagram"></ion-icon>
                <div></div>
                <img src="./images/logo.png" alt="logo" />
          </div>
         
          <div class="pesquisar">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
          </div>
        </div>
    );
}

function TopoMobile () {
    return (
        <div class="topo-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
            <img src="./images/logo.png" alt=""/>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
    );
}