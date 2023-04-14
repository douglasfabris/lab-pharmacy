import { useState } from "react";
import InputMask from "react-input-mask";
import HeaderMain from "../components/HeaderMain";
import Modal from "../components/Modal/Modal";
import "./Form.css";

function CadastroMedicamento() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [medicamento, setMedicamento] = useState({
    nome: "",
    laboratorio: "",
    dosagem: "",
    descricao: "",
    preco: "",
    tipo: "",
  });

  console.log(medicamento);
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem(
      `med.${medicamento.nome}`,
      JSON.stringify(medicamento)
    );
    setModalIsOpen(true);
    Object.keys(medicamento).forEach((v) => {
      medicamento[v] = "";
    });
  }

  return (
    <div>
      <HeaderMain />
      <div className="container">
        <Modal handleClose={() => setModalIsOpen(false)} isOpen={modalIsOpen} />
        <h2>Cadastro de novo medicamento</h2>
        <form onSubmit={handleSubmit}>
          <fieldset className="form-grid">
            <legend>Informações do medicamento</legend>
            <label htmlFor="nome">
              Nome do medicamento
              <input
                type="text"
                id="nome"
                value={medicamento.nome}
                onChange={(e) =>
                  setMedicamento({ ...medicamento, nome: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="laboratorio">
              Nome do laboratório
              <input
                type="text"
                id="laboratorio"
                value={medicamento.laboratorio}
                onChange={(e) =>
                  setMedicamento({
                    ...medicamento,
                    laboratorio: e.target.value,
                  })
                }
                required
              />
            </label>
            <label htmlFor="dosagem">
              Dosagem
              <input
                type="text"
                id="dosagem"
                value={medicamento.dosagem}
                onChange={(e) =>
                  setMedicamento({ ...medicamento, dosagem: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="preco">
              Preço unitário
              <input
                type="text"
                id="preco"
                value={medicamento.preco}
                onChange={(e) =>
                  setMedicamento({ ...medicamento, preco: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="tipo">
              Tipo de medicamento
              <select
                name="tipo"
                onChange={(e) =>
                  setMedicamento({ ...medicamento, tipo: e.target.value })
                }
                value={medicamento.tipo}
                required
              >
                <option value="" selected disabled style={{ display: "none" }}>
                  Escolha o tipo
                </option>
                <option value="comum">Medicamento comum</option>
                <option value="controlado">Medicamento controlado</option>
              </select>
            </label>
            <label htmlFor="descricao">
              Descrição
              <textarea
                id="descricao"
                name="descricao"
                value={medicamento.descricao}
                onChange={(e) =>
                  setMedicamento({ ...medicamento, descricao: e.target.value })
                }
              />
            </label>
          </fieldset>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroMedicamento;