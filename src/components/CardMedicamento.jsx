import "./CardMedicamentoStyle.css"
import caixaMedicamento from "../assets/caixa-remedio.png"
import { useState } from "react";

function CardMedicamento( {medicamento} ) {
  const [flip, setFlip] = useState(false)

  return ( 
    <div className={`card ${flip ? "flip" : ""}`}>
      <div className="front" onClick={() => setFlip(!flip)}>
        <img className="item" src={caixaMedicamento} alt="Caixa de medicamento" width="150px"/>
        <h3 className="item">{medicamento.nome} {medicamento.dosagem}</h3>
        <p className="item">{medicamento.laboratorio}</p>
      </div>
      <div className="back" onClick={() => setFlip(!flip)}>
        <p className="item"><b>Preço: </b>{medicamento.preco}</p>
        <p className="item"><b>Tipo:</b> {medicamento.tipo}</p>
        {medicamento.descricao && <p className="item"><b>Descrição:</b> {medicamento.descricao}</p>}
      </div>
    </div>

   );
}

export default CardMedicamento;