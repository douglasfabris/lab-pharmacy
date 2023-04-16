import { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import HeaderMain from "../components/HeaderMain";
import Modal from "../components/Modal/Modal";
import "./Form.css";

function CadastroFarmacia() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [farmacia, setFarmacia] = useState({
    razaoSocial: "",
    cnpj: "",
    fantasia: "",
    email: "",
    telefone: "",
    celular: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    if (submit) {
      fetch("http://localhost:3000/farmacias", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(farmacia),
      });
      setModalIsOpen(true);
      setSubmit(false);
    }
  }, [submit]);

  function pesquisaCep(e) {
    if (!e.target.value) return;
    const cep = e.target.value.replace(/\D/, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => (!res.ok ? console.log("CEP invalido") : res.json()))
      .then((data) =>
        setFarmacia({
          ...farmacia,
          cidade: data.localidade,
          bairro: data.bairro,
          logradouro: data.logradouro,
          estado: data.uf,
        })
      )
      .catch((error) => console.log(error));
  }

  async function enderecoLatLong() {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search/${farmacia.logradouro}+${farmacia.numero}+${farmacia.cidade}+Brasil?format=json`
    );
    const data = await response.json();
    setFarmacia((prevFarmacia) => ({
      ...prevFarmacia,
      latitude: data[0].lat,
      longitude: data[0].lon,
    }));
    setSubmit(true);
  }

function HandleSubmit(e) {
    e.preventDefault();
    enderecoLatLong();
    Object.keys(farmacia).forEach((v) => {
      farmacia[v] = "";
    });
  }

  return (
    <div>
      <HeaderMain />
      <div className="container">
        <Modal handleClose={() => setModalIsOpen(false)} isOpen={modalIsOpen} />
        <h2>Cadastro de nova farmácia</h2>
        <form onSubmit={(e) => HandleSubmit(e)}>
          <fieldset className="form-grid">
            <legend>Informações de contato</legend>
            <label htmlFor="razaoSocial">
              Razão social*
              <input
                type="text"
                id="razaoSocial"
                placeholder="Razão social"
                value={farmacia.razaoSocial}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, razaoSocial: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="cnpj">
              CNPJ
              <InputMask
                mask="99.999.999/9999-99"
                id="cnpj"
                placeholder="__.___.___/____-__"
                value={farmacia.cnpj}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, cnpj: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="fantasia">
              Nome fantasia
              <input
                type="text"
                id="fantasia"
                placeholder="Nome fantasia"
                onChange={(e) =>
                  setFarmacia({ ...farmacia, fantasia: e.target.value })
                }
                value={farmacia.fantasia}
                required
              />
            </label>
            <label htmlFor="email">
              E-mail
              <input
                type="email"
                id="email"
                placeholder="email@email.com"
                value={farmacia.email}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, email: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="telefone">
              Telefone
              <InputMask
                mask="(99) 9999-9999"
                id="telefone"
                placeholder="(__) ____-____"
                value={farmacia.telefone}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, telefone: e.target.value })
                }
              />
            </label>
            <label htmlFor="celular">
              Celular
              <InputMask
                mask="(99) 99999-9999"
                id="celular"
                placeholder="(__) _____-____"
                value={farmacia.celular}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, celular: e.target.value })
                }
                required
              />
            </label>
          </fieldset>

          <hr />

          <fieldset className="form-grid">
            <legend>Localização</legend>
            <label htmlFor="cep" style={{ flexBasis: "25%" }}>
              CEP
              <InputMask
                mask="99999-999"
                id="cep"
                placeholder="_____-___"
                onBlur={pesquisaCep}
                value={farmacia.cep}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, cep: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="endereco">
              Endereço
              <input
                type="text"
                id="endereco"
                placeholder="Endereço"
                defaultValue={farmacia.logradouro}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, logradouro: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="numero" style={{ flexBasis: "25%" }}>
              Número
              <input
                type="number"
                id="numero"
                placeholder="Número"
                value={farmacia.numero}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, numero: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="bairro">
              Bairro
              <input
                type="text"
                id="bairro"
                placeholder="Bairro"
                defaultValue={farmacia.bairro}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, bairro: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="cidade">
              Cidade
              <input
                type="text"
                id="cidade"
                placeholder="Cidade"
                defaultValue={farmacia.cidade}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, cidade: e.target.value })
                }
                required
              />
            </label>
            <label htmlFor="estado">
              Estado
              <input
                type="text"
                id="estado"
                placeholder="UF"
                onChange={(e) =>
                  setFarmacia({ ...farmacia, estado: e.target.value })
                }
                defaultValue={farmacia.estado}
                required
              />
            </label>
            <label htmlFor="complemento">
              Complemento
              <input
                type="text"
                id="complemento"
                placeholder="Complemento"
                value={farmacia.complemento}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, complemento: e.target.value })
                }
              />
            </label>
            {/* <label htmlFor="latitude" style={{ flexBasis: "25%" }}>
              Latitude
              <input
                type="text"
                id="latitude"
                placeholder="Latitude"
                value={farmacia.latitude}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, latitude: e.target.value })
                }
              />
            </label>
            <label htmlFor="longitude" style={{ flexBasis: "25%" }}>
              Longitude
              <input
                type="text"
                id="longitude"
                placeholder="Longitude"
                value={farmacia.longitude}
                onChange={(e) =>
                  setFarmacia({ ...farmacia, longitude: e.target.value })
                }
              />
            </label> */}
          </fieldset>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroFarmacia;
