import { useEffect, useState } from "react";
import HeaderMain from "../components/HeaderMain";
import CardMedicamento from "../components/CardMedicamento";

function ListaMedicamentos() {
  const [listaMedicamentos, setListaMedicamentos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/medicamentos")
    .then(res => res.json())
    .then(medicamentos => {
      setListaMedicamentos(medicamentos.map(medicamento => medicamento))
    })
  }, [])

  return ( 
    <div>
      <HeaderMain />
      <div className="container">
        <h2>Lista de medicamentos</h2>
        <p style={{textAlign: "center"}}>Clique no medicamento para mais detalhes</p>
        <div className="grid">
          {listaMedicamentos.map(medicamento => (
            <CardMedicamento medicamento={medicamento} key={medicamento.nome} />
          ))}
        </div>
      </div>
    </div>
   );
}

export default ListaMedicamentos;