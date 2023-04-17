import { Link } from "react-router-dom";

function HeaderMain() {
  return ( 
    <header>
      <nav>
        <div className="logo">
          <h3>LabPharmacy main</h3>
        </div>
        <div className="navbar">
          <ul>
            <li><Link to="/mapa">Mapa de farmácias</Link></li>
            <li><Link to="/cadastro-farmacia">Cadastrar Farmácia</Link></li>
            <li><Link to="/cadastro-medicamento">Cadastrar Medicamentos</Link></li>
            <li><Link to="/lista-medicamentos">Lista de medicamentos</Link></li>
          </ul>
        </div>
      </nav>
    </header>
   );
}

export default HeaderMain;