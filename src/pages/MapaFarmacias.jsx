import { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Mapa-style.css";
import FarmaciaPopup from "../components/FarmaciaPopup";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

function Mapa() {

  const [listaFarmacias, setListaFarmacias] = useState([]);
  const {isLogged, setIsLogged} = useContext(LoginContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) {
      return navigate("/")
    }
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/farmacias")
      .then((res) => res.json())
      .then((data) => setListaFarmacias(data));
  }, []);

  return (
    <div>
      <h2>Mapa das farmácias cadastradas</h2>
      <div className="container mapa">
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
