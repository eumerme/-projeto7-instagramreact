export default function TopoDesktop () {
    return (
        <div className="topo-desktop">
          <div className="logo-insta">
                <ion-icon name="logo-instagram"></ion-icon>
                <div></div>
                <img src="./images/logo.png" alt="logo" />
          </div>
         
          <div className="pesquisar">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div className="icones">
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="compass-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
          </div>
        </div>
    );
}