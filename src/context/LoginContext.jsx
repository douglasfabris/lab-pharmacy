import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <LoginContext.Provider value={{ isLogged, setIsLogged }}>
      <>{children}</>
    </LoginContext.Provider>
  );
}
