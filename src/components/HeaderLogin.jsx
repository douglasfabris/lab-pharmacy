import "./Header.css"
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

function HeaderLogin() {
  return ( 
    <header>
      <nav>
        <img src={logo} height={60} alt="Logo"/>
        <div className="navbar">
          <ul>
            <li>
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
   );
}

export default HeaderLogin;