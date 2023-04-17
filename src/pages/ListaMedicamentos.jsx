import { useEffect, useState } from "react";
import HeaderMain from "../components/HeaderMain";
import CardMedicamento from "../components/CardMedicamento";

function ListaMedicamentos() {
  const [listaMedicamentos, setListaMedicamentos] = useState([]);
  const [barraPesquisa, setBarraPesquisa] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/medicamentos")
      .then((res) => res.json())
      .then((medicamentos) => {
        setListaMedicamentos(medicamentos.map((medicamento) => medicamento));
      });
  }, []);

  const filteredMed = listaMedicamentos.filter((el) => {
    if (barraPesquisa === "") return el
    return el.nome.toLowerCase().includes(barraPesquisa)
  })

  return (
    <div>
      <HeaderMain />
      <div className="container">
        <h2>Lista de medicamentos</h2>
        <label htmlFor="barraPesquisa">
          Busca
          <input
            type="text"
            placeholder="Digite o nome do medicamento"
            value={barraPesquisa}
            onChange={(e) => setBarraPesquisa(e.target.value.toLowerCase())}
          />
        </label>
        <p>
          Clique no medicamento para mais detalhes
        </p>
        <div className="grid">
          {filteredMed.map((medicamento) => (
            <CardMedicamento medicamento={medicamento} key={medicamento.nome} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaMedicamentos;
