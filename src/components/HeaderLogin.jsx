import "./Header.css"
import { Link } from "react-router-dom";

function HeaderLogin() {
  return ( 
    <header>
      <nav>
        <h3>LabPharmacy</h3>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
   );
}

export default HeaderLogin;