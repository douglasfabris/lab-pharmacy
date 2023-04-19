import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Mapa from "./pages/MapaFarmacias"
import CadastroFarmacia from "./pages/CadastroFarmacia";
import CadastroMedicamento from "./pages/CadastroMedicamento";
import ListaMedicamentos from "./pages/ListaMedicamentos";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/LoginPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LoginPage />
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
      },
      {
        path: "/lista-medicamentos",
        element: <ListaMedicamentos />
      }
    ]
  }
]);

export default AppRouter;
