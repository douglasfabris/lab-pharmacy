import { useRouteError } from "react-router-dom";

function ErrorPage () {
  const error = useRouteError();
  return ( 
    <div className="container">
      <p>Ops! Ocorreu um erro na requisição na página. Mais informações sobre o erro abaixo:</p>
      <p> <i>{error.statusText || error.message}</i> </p>
    </div>
   );
}

export default ErrorPage;