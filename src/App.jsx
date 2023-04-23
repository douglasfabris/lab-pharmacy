import "./App.css"
import { Outlet } from "react-router-dom"
import { useContext } from "react"
import HeaderLogin from "./components/HeaderLogin"
import { LoginContext } from "./context/LoginContext"
import HeaderMain from "./components/HeaderMain"
import Footer from "./components/Footer"

function App() {
  const { isLogged, setIsLogged } = useContext(LoginContext)
  return (
    <div id="wrapper">
      {/* Coloca a header correta de acordo se o usuário está logado ou não */}
      {isLogged ? <HeaderMain /> : <HeaderLogin />}
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
