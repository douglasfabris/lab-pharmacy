import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import HeaderMain from "../components/HeaderMain";
import "./Mapa-style.css";
import FarmaciaPopup from "../components/FarmaciaPopup";

function Mapa() {
  const [listaFarmacias, setListaFarmacias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/farmacias")
      .then((res) => res.json())
      .then((data) => setListaFarmacias(data));
  }, []);

  return (
    <div>
      <HeaderMain />
      <div className="container mapa">
        <h2>Mapa das farmácias cadastradas</h2>
        <MapContainer
          center={[-27.5935, -48.55854]}
          zoom={12}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {listaFarmacias.map((farmacia) => (
            <Marker
              key={farmacia.id}
              position={[farmacia.latitude, farmacia.longitude]}
            >
              <Popup>
                <FarmaciaPopup farmacia={farmacia}/>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Mapa;
