import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./FooterStyle.css"
import { LoginContext } from "../context/LoginContext";

function Footer () {
  const {isLogged, setIsLogged} = useContext(LoginContext)
  const navigate = useNavigate()

  function handleLogout() {
    setIsLogged(false)
    navigate("/")
  }

  return ( 
    <footer>
      LABPharmacy Inc
      {isLogged ? <span style={{float: "right"}} onClick={handleLogout}>Logout</span> : ""}
    </footer>
   );
}

export default Footer ;