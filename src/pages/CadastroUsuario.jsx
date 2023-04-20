import { useEffect, useState } from "react"
import Modal from "../components/Modal/Modal"
import logoExtenso from "../assets/logo_extenso.png"

function CadastroUsuario() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [listaUsuarios, setListaUsuarios] = useState([])
  const [usuarioInvalido, setUsuarioInvalido] = useState(false)
  const [usuario, setUsuario] = useState({
    email: "",
    senha: "",
  })

  useEffect(() => {
    fetch("http://localhost:3000/usuarios")
      .then((res) => res.json())
      .then((usuarios) => {
        setListaUsuarios(usuarios.map((usuario) => usuario))
      })
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    if (!listaUsuarios.some((el) => el.email === usuario.email)) {
      fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      })
      setUsuarioInvalido(false)
      setModalIsOpen(true)
      Object.keys(usuario).forEach((v) => {
        usuario[v] = ""
      })
    }
    setUsuarioInvalido(true)
  }

  return (
    <div className="container">
      <Modal handleClose={() => setModalIsOpen(false)} isOpen={modalIsOpen} />
      <form className="form" onSubmit={handleSubmit}>
        <img
          src={logoExtenso}
          alt="logo"
          width={400}
          style={{ marginTop: "20px" }}
        />
        <h2>Crie seu cadastro</h2>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={usuario.email}
            onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
            id="email"
            required
          />
        </label>
        <label htmlFor="senha">
          Senha
          <input
            type="password"
            placeholder="Digite sua senha"
            minLength="8"
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
            value={usuario.senha}
            onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
            id="senha"
            required
          />
        </label>
        <p style={{ color: "red", fontSize: "12px" }}>
          A senha deve possuir 8 caracteres contendo letras e números
        </p>
        {usuarioInvalido ? (
          <p style={{ color: "red", fontSize: "12px" }}>Usuário já existente</p>
        ) : (
          ""
        )}
        <button type="submit">Criar cadastro</button>
      </form>
    </div>
  )
}

export default CadastroUsuario
