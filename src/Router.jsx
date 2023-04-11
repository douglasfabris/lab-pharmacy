import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Mapa from "./pages/Mapa"

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mapa",
    element: <Mapa />
  }
]);

export default AppRouter;
