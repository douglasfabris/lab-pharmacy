import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import CardMedicamento from "../components/CardMedicamento"
import { LoginContext } from "../context/LoginContext"

function ListaMedicamentos() {
  const [listaMedicamentos, setListaMedicamentos] = useState([])
  const [barraPesquisa, setBarraPesquisa] = useState("")
  const { isLogged, setIsLogged } = useContext(LoginContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogged) {
      return navigate("/")
    }
  }, [])

  useEffect(() => {
    fetch("http://localhost:3000/medicamentos")
      .then((res) => res.json())
      .then((medicamentos) => {
        setListaMedicamentos(medicamentos.map((medicamento) => medicamento))
      })
  }, [])

  const filteredMed = listaMedicamentos.filter((el) => {
    if (barraPesquisa === "") return el
    return el.nome.toLowerCase().includes(barraPesquisa)
  })

  return (
    <div>
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
        <p>Clique no medicamento para mais detalhes</p>
        <div className="grid">
          {filteredMed.map((medicamento) => (
            <CardMedicamento medicamento={medicamento} key={medicamento.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListaMedicamentos
