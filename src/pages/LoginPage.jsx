import "./Form.css"
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    return navigate("/mapa")
  }

  return ( 
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Faça seu login</h2>
        <label htmlFor="email">
          E-mail
          <input type="email" placeholder="Digite seu e-mail" id="email" required/>
        </label>
        <label htmlFor="senha">
          Senha
          <input type="password" placeholder="Digite sua senha" minLength="8" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" id="senha" required/>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
   );
}

export default LoginPage;