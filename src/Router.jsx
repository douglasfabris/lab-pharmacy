import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Mapa from "./pages/Mapa"
import CadastroFarmacia from "./pages/CadastroFarmacia";
import CadastroMedicamento from "./pages/CadastroMedicamento";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mapa",
    element: <Mapa />
  },
  {
    path: "/cadastro-farmacia",
    element: <CadastroFarmacia />
  },
  {
    path: "/cadastro-medicamento",
    element: <CadastroMedicamento />
  }
]);

export default AppRouter;
