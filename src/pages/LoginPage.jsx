import "./Form.css"
import { useNavigate } from "react-router-dom";
import logoExtenso from "../assets/logo_extenso.png"
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

function LoginPage() {
  const navigate = useNavigate()
  const {isLogged, setIsLogged} = useContext(LoginContext)
  function handleSubmit(e) {
    e.preventDefault()
    setIsLogged(true)
    return navigate("/mapa")
  }

  return ( 
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <img src={logoExtenso} alt="logo" width={400}/>
        <h2>Faça seu login</h2>
        <label htmlFor="email">
          E-mail
          <input type="email" placeholder="Digite seu e-mail" id="email" required/>
        </label>
        <label htmlFor="senha">
          Senha
          <input type="password" placeholder="Digite sua senha" minLength="8" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" id="senha" required/>
        </label>
        <p style={{color: "red"}}>A senha deve possuir 8 caracteres contendo letras e números</p>
        <button type="submit">Login</button>
      </form>
    </div>
   );
}

export default LoginPage;