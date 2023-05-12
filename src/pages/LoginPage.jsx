import "./Form.css"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import logoExtenso from "../assets/logo_extenso.png"
import { LoginContext } from "../context/LoginContext"

function LoginPage() {
  const [listaUsuarios, setListaUsuarios] = useState([])
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")
  const [senhaInvalida, setSenhaInvalida] = useState(false)

  useEffect(() => {
    fetch("http://localhost:3000/usuarios")
      .then((res) => res.json())
      .then((usuarios) => {
        setListaUsuarios(usuarios.map((usuario) => usuario))
      })
  }, [])

  const navigate = useNavigate()
  const { isLogged, setIsLogged } = useContext(LoginContext)
  function handleSubmit(e) {
    e.preventDefault()
    if (
      listaUsuarios.some((el) => el.email === usuario && el.senha === senha)
    ) {
      setSenhaInvalida(false)
      setIsLogged(true)
      return navigate("/mapa")
    }
    setSenhaInvalida(true)
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <img
          src={logoExtenso}
          alt="logo"
          width={400}
          style={{ marginTop: "20px" }}
        />
        <h2>Faça seu login</h2>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
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
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            id="senha"
            required
          />
        </label>
        {senhaInvalida ? (
          <p style={{ color: "red", fontSize: "12px" }}>Senha inválida</p>
        ) : (
          ""
        )}
        <p style={{ color: "red", fontSize: "12px" }}>
          A senha deve possuir 8 caracteres contendo letras e números
        </p>
        <p style={{ fontSize: "10px", paddingTop: "10px" }}>
          Usuário padrão:email@email.com <br />
          Senha padrão: senha1234
        </p>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
