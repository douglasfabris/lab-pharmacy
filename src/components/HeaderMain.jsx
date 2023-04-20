import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function HeaderMain() {
  return (
    <header>
      <nav>
        <img src={logo} height={60} alt="Logo" />
        <div className="navbar">
          <ul>
            <li>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/mapa"
              >
                Mapa de farmácias
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/cadastro-farmacia"
              >
                Cadastrar Farmácia
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/cadastro-medicamento"
              >
                Cadastrar Medicamentos
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/lista-medicamentos"
              >
                Lista de medicamentos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderMain;
